import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from './index';


describe("test Select component", () => {
    let testItems: SelectItems[] = [];

    beforeEach(() => {
        testItems = [
            { value: "valueA", text: "textA", isSelected: false },
            { value: "valueB", text: "textB", isSelected: false },
            { value: "valueC", text: "textC", isSelected: false },
        ]
    });

    it("single select should show init lable and check status correctly", () => {
        testItems[1].isSelected = true;
        const { getByLabelText, getByTitle } = render(
            <Select
                id="testId"
                name="testName"
                items={testItems}
                labelName="testLabel"
                onItemClicked={(f) => { }}
            />
        );

        const select = getByTitle("testLabel") as HTMLSelectElement;
        const lable = getByLabelText("testLabel");

        expect(lable).toBeInTheDocument();
        expect(select.selectedOptions.length).toBe(1);
        expect(select.selectedOptions[0].text).toBe("textB");
    });

    it("multiple select should show init lable and check status correctly", () => {
        testItems[1].isSelected = true;
        testItems[2].isSelected = true; 
        const { getByLabelText, getByTitle } = render(
            <Select
                id="testId"
                name="testName"
                items={testItems}
                labelName="testLabel"
                onItemClicked={(f) => { }}
                isMultiple={true}
            />
        );

        const select = getByTitle("testLabel") as HTMLSelectElement;
        const lable = getByLabelText("testLabel");

        expect(lable).toBeInTheDocument();
        expect(select.selectedOptions.length).toBe(2);
        expect(select.selectedOptions[0].text).toBe("textB");
        expect(select.selectedOptions[1].text).toBe("textC");
    });
});