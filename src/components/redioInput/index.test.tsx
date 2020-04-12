import  React  from 'react';
import { render, fireEvent } from '@testing-library/react';
import RedioInput from './index';


describe("test RedioInput component", () => {
    it("component should show init lable and check status correctly", () => {
        const { getByLabelText, getByDisplayValue } = render(<RedioInput 
            name="testRedioInputName"
            value="testRedioInputValue"
            id="testRedioInputId"
            checked={false}
            onChange={(f)=>{}}
            displayValue="testRedioInputDisplayValue"
        />);

        const input = getByDisplayValue("testRedioInputValue");
        const lable = getByLabelText("testRedioInputDisplayValue");

        expect(input).toBeInTheDocument();
        expect(lable).toBeInTheDocument();
    });

    it("component should pass correct value when input changed", done => {
        const handleInputChange: (
            event: React.ChangeEvent<HTMLInputElement>
        ) => void = event => {
            expect(event.currentTarget.value).toBe("testRedioInputValueB");
            expect(event.currentTarget.checked).toBe(true);
            done();
        };  

        const { getByLabelText } = render(
            <>
                <RedioInput
                    name="testRedioInputName"
                    value="testRedioInputValueA"
                    id="testRedioInputIdA"
                    checked={false}
                    onChange={handleInputChange}
                    displayValue="testRedioInputDisplayValueA"
                />
                <RedioInput
                    name="testRedioInputName"
                    value="testRedioInputValueB"
                    id="testRedioInputIdB"
                    checked={false}
                    onChange={handleInputChange}
                    displayValue="testRedioInputDisplayValueB"
                />
            </>
        );

        const labelB = getByLabelText("testRedioInputDisplayValueB");
        fireEvent.click(labelB);
    });
});