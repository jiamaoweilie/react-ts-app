import * as React from "react";
import "./personalInfo.css";

export interface IPersonalInfoState {
    firstName: string;
    lastName:string;
}

export class PersonalInfo extends React.Component<{}, IPersonalInfoState>{
    constructor(props: {}) {
        super(props);
        this.state = {firstName:'', lastName:''}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFirtNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
        this.setState({ firstName: e.currentTarget.value });
    }

    onLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
        this.setState({ lastName: e.currentTarget.value });
    }

    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = e =>{
        const firstName = e.currentTarget["first-name"].value;
        const lastName = e.currentTarget["last-name"].value;

        alert(`User Name：${firstName} ${lastName}`);
        e.preventDefault();
    }

    public render(){
        return (
            <div className="form">
                <h2>Personal Info</h2>
                <form className="input-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className="input-label" htmlFor="first-name">First Name:</label>
                    </div>
                    <div>
                        <input className="text-input" id="first-name" onChange={this.onFirtNameChange}></input>
                    </div>
                    <div>
                        <label className="input-label" htmlFor="last-name">Last Name:</label>
                    </div>
                    <div>
                        <input className="text-input" id="last-name" onChange={this.onLastNameChange}></input>
                    </div>
                    <div>
                        <button className="button" disabled={!this.state.lastName || !this.state.firstName}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}