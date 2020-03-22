import * as React from "react";
import './hello.css';

export interface HelloProps {
    name: string;
}

export const Hello = (props: HelloProps) => (
    <h1 className="Hello"> Hello form {props.name} </h1>
);
