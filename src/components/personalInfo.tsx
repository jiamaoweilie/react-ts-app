import * as React from "react";

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

    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = e =>{
        const firstName = e.currentTarget["first-name"].value;
        const lastName = e.currentTarget["last-name"].value;

        alert(`User Name：${firstName} ${lastName}`);
        e.preventDefault();
    }

    public render(){
        return (
            <div>
                <h2>Personal Info</h2>
                <form className="input-form" onSubmit={this.handleSubmit}>
                <label className="input-label" htmlFor="first-name">First Name:</label>
                <input className="text-input" id="first-name"></input>
                <label className="input-label" htmlFor="first-name">Last Name:</label>
                <input className="text-input" id="last-name"></input>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}