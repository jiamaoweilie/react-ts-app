import React from "react";
import {render, fireEvent} from "@testing-library/react"
import InputField from "./index";

describe("test InputField component", () => {
    it("component should init label and value", () => {
        const { getByLabelText, getByDisplayValue } = render(
            <InputField 
                labelName="TestLabelName"
                name="TestName"
                value="TestValue"
                id="TestId"
                onChange={f=>{}}
            />
        );

        const lable = getByLabelText("TestLabelName");
        const value = getByDisplayValue("TestValue");

        expect(lable).toBeInTheDocument();
        expect(value).toBeInTheDocument();
    });

    it("component should pass correct value when input changed", done => {
        const handleInputChange: (
            event: React.ChangeEvent<HTMLInputElement>
            ) => void = event => {
                expect(event.currentTarget.value).toBe("NewTestValue");
                done();
            }

            const {getByDisplayValue} = render(
                <InputField
                    labelName="TestLabelName"
                    name="TestName"
                    value="TestValue"
                    id="TestId"
                    onChange={ handleInputChange }
                />
            )

            const input = getByDisplayValue("TestValue");
            fireEvent.change(input, {target: {value: "NewTestValue"}})
    });
}); 