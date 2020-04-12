import React from "react";

type RedioInputProps = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    displayValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RedioInput = (props: RedioInputProps) => {
    const { displayValue, ...inputProps } = props
    return (
        <label htmlFor={inputProps.id}>
            <input type="radio" { ...inputProps }/>
            {displayValue}
        </label>
    );
};

export default RedioInput as React.FC<RedioInputProps>;

