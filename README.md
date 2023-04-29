FlexInput
=========

FlexInput is a flexible input component for React.

Installation
------------

To install FlexInput, run the following command:


```
npm install rd-flexinput
```

Usage
-----

To use FlexInput, simply import it and use it in your React components:


```
//MyComponent.tsx

import React, { useState } from "react";
import FlexInput from "flex-input";
import "styles.css"
const MyComponent = () => {
      const [value, setValue] = useState<string>();
      return (
            <FlexInput
                  inputProps={{
                        type: "text",
                        id: "my_input",
                        className: "input",
                        placeholder: "",
                        onChange: (e) => setValue(e.target.value),
                        value: value,
                  }}
                  containerClassName="container"
                  focusContainerClassName="container-focus"            
                  wrapperClassName="wrapper"
                  labelClassName="label"
                  labelContent="My Label"
                  beforeElement={<div className="before">My Div</div>}
                  afterElement={<div className="after">My Div</div>}
                  hasValueContainerClassName="onValue"
            />     
      );
};
```

```
/* styles.css */

.container{
    display: flex;
    flex-direction: row;
    border: .2rem solid black;
    width: 100%;
    transition: 0.3s ease;
}
.wrapper{
    display: flex;
    flex-direction:  column;
    position: relative;
    width: 100%;
}
.input{
    border: 0;
    outline: none;
    height: 100%;
    width: 100%;
    padding: 1rem;
}
.label{
    position: absolute;
    left: .5rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: .1rem;
    padding-bottom: .1rem;
    pointer-events: none;
    transition: 0.3s ease;
}

.after,.before{
    white-space: nowrap;
    background-color: black;
    padding: 1rem;
    text-align: center;
    color: white;
}

.onValue .label{
    top: 0%;
}

.container-focus .label{
    top: 0%;
    color:  green;
}
.container-focus{
    border-color: green;
}

.container-focus .after{
    color: green;
}
```


### Props

FlexInput accepts the following props:


* `inputProps` : The props to be passed to the input element.

* `labelContent` : The content of the label. Can be a string or a ReactNode.

* `containerClassName` : The CSS class to be applied to the container element.

* `focusContainerClassName` : The CSS class to be applied to the container element when it is in focus.

* `blurContainerClassName` : The CSS class to be applied to the container element when it loses focus.

* `hasValueContainerClassName` : The CSS class to be applied to the container element when input has a value.

* `wrapperClassName` : The CSS class to be applied to the wrapper element of label and input.

* `labelClassName` : The CSS class to be applied to the label element.

* `disabledOverlayElememt` : A JSX element to be displayed over the input when it is disabled. If this prop is provided, the input is automatically considered as disabled.

* `beforeElement` : A JSX element to be displayed before the input.

* `afterElement` : A JSX element to be displayed after the input.

Contribution
------------

Contributions are welcome and appreciated! If you find any issues or have suggestions for improvement, please submit a pull request or create an issue on the [GitHub repository](https://github.com/yourusername/rd-flexinput/issues).

License
-------

FlexInput is [MIT licensed](https://github.com/developerx167/rd-flexinput/blob/master/LICENSE).

Thanks
------

Thanks for using FlexInput! If you have any questions or suggestions, feel free to open an issue or pull request.