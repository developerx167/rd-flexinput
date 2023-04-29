import React from "react";
import { fireEvent, getByLabelText, getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlexInput from "../FlexInput/FlexInput";
test('check tree', () => {
    const {container} = render(<FlexInput />)
    expect(container.children).toHaveLength(1);
    expect(container.children[0].children).toHaveLength(1);
    expect(container.children[0].children[0].children).toHaveLength(2);
    expect(container.children[0].children[0].children[0].tagName).toBe("LABEL");
    expect(container.children[0].children[0].children[1].tagName).toBe("INPUT");
})

test('check tree with before and after elements', () => {
    const {container} = render(<FlexInput beforeElement={<div data-testId="beforeElement"></div>} afterElement={<div data-testId="afterElement"></div>} />)
    expect(container.children).toHaveLength(1);
    expect(container.children[0].children).toHaveLength(3);
    expect(container.children[0].children[0]).toHaveAttribute("data-testId","beforeElement");
    expect(container.children[0].children[1].children).toHaveLength(2);
    expect(container.children[0].children[1].children[0].tagName).toBe("LABEL");
    expect(container.children[0].children[1].children[1].tagName).toBe("INPUT");
    expect(container.children[0].children[2]).toHaveAttribute("data-testId","afterElement");
})
test('check tree with before, after and disabled overlay elements', () => {
    const {container} = render(<FlexInput disabledOverlayElememt={<div data-testId="disabled"></div>} beforeElement={<div data-testId="beforeElement"></div>} afterElement={<div data-testId="afterElement"></div>} />)
    expect(container.children).toHaveLength(1);
    expect(container.children[0].children).toHaveLength(4);
    expect(container.children[0].children[0]).toHaveAttribute("data-testId","beforeElement");
    expect(container.children[0].children[1].children).toHaveLength(2);
    expect(container.children[0].children[1].children[0].tagName).toBe("LABEL");
    expect(container.children[0].children[1].children[1].tagName).toBe("INPUT");
    expect(container.children[0].children[2]).toHaveAttribute("data-testId","afterElement");
    expect(container.children[0].children[3]).toHaveAttribute("data-testId","disabled");
})


test('should render label with text', () => {
    const {container} = render(<FlexInput labelContent={"my label"} />);
    const el = getByText(container,"my label");
    expect(el.tagName).toBe("LABEL");
})

test('should have id and correct label',()=>{
    const {container} = render(<FlexInput inputProps={{id : "my_input"}} labelContent={"my label"} />);
    const el = getByLabelText(container,"my label");
    expect(el.id).toBe("my_input");
})
test('should have value on change',()=>{
    const {container} = render(<FlexInput inputProps={{id : "my_input"}} labelContent={"my label"} />);
    const el = getByLabelText(container,"my label");
    fireEvent.change(el,{target : {value : "foo"}});
    expect(el).toHaveValue("foo");
})

test('should be disabled',()=>{
    const {container} = render(<FlexInput inputProps={{id : "my_input", disabled : true}} labelContent={"my label"} />);
    const el = getByLabelText(container,"my label");
    expect(el).toBeDisabled();
})
test('should be disabled on overlay',()=>{
    const {container} = render(<FlexInput inputProps={{id : "my_input", disabled : false}} disabledOverlayElememt={<></>} labelContent={"my label"} />);
    const el = getByLabelText(container,"my label");
    expect(el).toBeDisabled();
})

test('should not have classNames',()=>{
    const {container} = render(<FlexInput/>)
    expect(container.children[0]).not.toHaveClass();
    expect(container.children[0].children[0]).not.toHaveClass();
    expect(container.children[0].children[0].children[0]).not.toHaveClass();
    expect(container.children[0].children[0].children[1]).not.toHaveClass();
})
test('should have classNames',()=>{
    const {container} = render(<FlexInput containerClassName="container" wrapperClassName="wrapper" inputProps={{ className : "input" }} labelClassName="label"/>)
    expect(container.children[0]).toHaveClass("container");
    expect(container.children[0].children[0]).toHaveClass("wrapper");
    expect(container.children[0].children[0].children[0]).toHaveClass("label");
    expect(container.children[0].children[0].children[1]).toHaveClass("input");
})
test('should have classNames based on focus',()=>{
    const {container} = render(<FlexInput labelContent="label" inputProps={{id : "my_input"}} containerClassName="container" blurContainerClassName="container-blur" focusContainerClassName="container-focus"/>)
    const el = getByLabelText(container,"label");
    expect(container.children[0]).not.toHaveClass("container-focus")
    expect(container.children[0]).toHaveClass("container-blur")
    fireEvent.focus(el);
    expect(container.children[0]).not.toHaveClass("container-blur")
    expect(container.children[0]).toHaveClass("container-focus")
    fireEvent.blur(el);
    expect(container.children[0]).not.toHaveClass("container-focus")
    expect(container.children[0]).toHaveClass("container-blur")
})
test('should not have value className',()=>{
    const {container} = render(<FlexInput hasValueContainerClassName="value-container"/>)
    expect(container.children[0]).not.toHaveClass("value-container")
})
test('should have value className',()=>{
    const {container} = render(<FlexInput inputProps={{value : "xyz"}} hasValueContainerClassName="value-container"/>)
    expect(container.children[0]).toHaveClass("value-container")
})
test('should have value className on change',()=>{
    const {container} = render(<FlexInput labelContent="label" inputProps={{ id : "my_input"}} hasValueContainerClassName="value-container"/>)
    const el = getByLabelText(container,"label")
    fireEvent.change(el,{target : {value : "my value"}})
    expect(container.children[0]).toHaveClass("value-container")
})
