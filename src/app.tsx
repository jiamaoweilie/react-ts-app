import React, { Component } from "react";
import "./app.css";
import InputField from './components/inputFields/index';

export interface IAppState {
    firstName: string;
    lastName: string;
}

export class App extends Component<{}, IAppState>{
    constructor(props: {}) {
        super(props);
        this.state = { firstName: '', lastName: '' }
    }

    onNameChange: (
        inputName: 'firstName' | 'lastName',
        e: React.ChangeEvent<HTMLInputElement>
        ) => void = (inputName, e) => {
        //@ts-ignore
        this.setState({ [inputName]: e.currentTarget.value });
    }


    handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = e => {
        const firstName = e.currentTarget["first-name"].value;
        const lastName = e.currentTarget["last-name"].value;

        alert(`User Name：${firstName} ${lastName}`);
        e.preventDefault();
    }

    public render() {
        return (
            <div className="app">
                <header className="app-header">Jia Wei's React Demo</header>
                <main className="app-body">
                    <h2 className="body-title">Personal Info</h2>
                    <form className="input-form" onSubmit={this.handleSubmit}>
                        <InputField  labelName="First Name: "
                        name="firstName"
                        id="first-name"
                        value={this.state.firstName}
                        onChange={ e => {this.onNameChange('firstName', e)}}
                        />
                        <InputField labelName="Last Name: "
                            name="lastName"
                            id="last-name"
                            value={this.state.lastName}
                            onChange={e => { this.onNameChange('lastName', e) }}
                        />
                        <button className="button" disabled={!this.state.lastName || !this.state.firstName}>Submit</button>
                    </form>
                </main>
            </div> 
        );
    }
}

export default App;