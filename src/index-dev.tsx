import FlexInput from "./component"
import React, { useState } from "react";
import {createRoot} from "react-dom/client";
import "../styles/index.css"
const App = () =>{
    const [value,setValue] = useState<string>();
    return(
        <main>
            <form onSubmit={(e)=>e.preventDefault()}>
                <FlexInput 
                    inputProps={{
                        type : "text",
                        id : "my_input",
                        className : "input",
                        placeholder : " ",
                        onChange : (e)=>setValue(e.target.value),
                        value : value
                        // disabled : false,
                    }} 
                    // disabledOverlayElememt={<></>}
                    containerClassName="container"
                    focusContainerClassName="container-focus"
                    wrapperClassName="wrapper"
                    labelClassName="label"
                    labelContent={"my label"}
                    beforeElement={<div className="before">my div</div>}
                    afterElement={<div className="after">my div</div>}
                    hasValueContainerClassName="onValue"
                    
                />
            </form>
        </main>
    )
}

const root = createRoot(document.getElementById("root")!);

root.render(<App/>)