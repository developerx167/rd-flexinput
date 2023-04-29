export type LabelContentType = JSX.Element | string;
export interface FlexInputProps {
    inputProps? : React.InputHTMLAttributes<HTMLInputElement>,
    labelContent? : LabelContentType
    containerClassName? : string,
    focusContainerClassName? : string,
    blurContainerClassName? : string,
    hasValueContainerClassName? : string
    wrapperClassName? : string,
    labelClassName? : string,
    disabledOverlayElememt? : JSX.Element,
    beforeElement? : JSX.Element,
    afterElement? : JSX.Element,
}