import React, { useState } from "react";

export type SelectItem = {
    value: string;
    text: string;
    isSelected: boolean;
}

type SelectProps = {
    id: string;
    name: string;
    items: SelectItem[];
    isMultiple?: boolean;
    labelName: string;
    onItemClicked: (item: SelectItem) => void;
};

const Select = (props: SelectProps) => {
    const [isOpen, setOpenStatus] = useState(false);
    const selectedValues = props.items
        .filter(item => item.isSelected)
        .map(item => item.value);
    const selectedText = props.items
        .filter(item => item.isSelected)
        .map(item => item.text)
        .join(";");

    return (
        <>
            <label htmlFor={props.id}>{props.labelName}</label>
            <div className="select-container" onClick={() => setOpenStatus(!isOpen)}>
                <div>{selectedText}</div>
                {isOpen && (
                    <ul>
                        {
                            props.items.map((item) => (
                                <li key={item.value} onClick={() => props.onItemClicked(item)}>
                                    {item.text}
                                </li>
                            ))
                        }
                    </ul>
                )}

                <select
                    id={props.id}
                    title={props.labelName}
                    name={props.name}
                    onChange={f => { }}
                    value={props.isMultiple ? selectedValues : selectedValues.join(";")}
                    multiple={props.isMultiple}
                >
                    {props.items.map(item => (
                        <option
                            key={item.value}
                            value={item.value}
                            onClick={() => props.onItemClicked(item)}
                        >
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Select as React.FC<SelectProps>;

