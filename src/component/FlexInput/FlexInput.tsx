import React, { useEffect, useState } from 'react'
import type {FlexInputProps} from './type'
const FlexInput = ({
  blurContainerClassName,
  containerClassName,
  disabledOverlayElememt,
  focusContainerClassName,
  hasValueContainerClassName,
  inputProps,
  labelClassName,
  wrapperClassName,
  labelContent,
  beforeElement,
  afterElement
} : FlexInputProps) => {
  const [focus,setFocus] = useState<boolean>(false);
  const [className,setClassName] = useState<string>(`${containerClassName ? containerClassName : ""} ${(inputProps?.value && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
  const [hasValue,setHasValue] = useState<boolean>(false);
  function focusHandler(e : React.FocusEvent<HTMLInputElement, Element>){
    setFocus(true);
    inputProps?.onFocus && inputProps.onFocus(e);
  }
  function blurHandler(e : React.FocusEvent<HTMLInputElement, Element>){
    setFocus(false);
    inputProps?.onBlur && inputProps.onBlur(e);
  }
  function changeHandler(e : React.ChangeEvent<HTMLInputElement>){
    inputProps?.onChange && inputProps.onChange(e);
    if(e.target.value){
      setHasValue(true);
    }else{
      setHasValue(false);
    }
  }
  useEffect(()=>{
    if(focus){
      setClassName(`${containerClassName ? containerClassName : ""} ${focusContainerClassName ? focusContainerClassName : ""} ${(hasValue && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
    }else{
      setClassName(`${containerClassName ? containerClassName : ""} ${blurContainerClassName ? blurContainerClassName : ""} ${(hasValue && hasValueContainerClassName) ? hasValueContainerClassName : "" }`);
    }
  },[focus,hasValue])

  return (
    <div style={{position : "relative"}} className={className}>
      {beforeElement}
      <div className={wrapperClassName}>
        <label className={labelClassName} htmlFor={inputProps?.id}>{labelContent}</label>
        <input {...inputProps} onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler} disabled={(inputProps?.disabled || disabledOverlayElememt) ? true : false}/>
      </div>
      {afterElement}
      {inputProps?.disabled && disabledOverlayElememt}
    </div>
  )
}
export default FlexInput