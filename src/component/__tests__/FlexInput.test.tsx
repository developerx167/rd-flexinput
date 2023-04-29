import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlexInput from "../FlexInput/FlexInput";
test('should first', () => {
    const {container} = render(<FlexInput />)
    expect(container).toHaveTextContent("x");
})