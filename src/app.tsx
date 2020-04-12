import React, { Component, useState } from "react";
import "./app.css";
import InputField from './components/inputFields/index';
import RedioInput from './components/redioInput/index';

const App = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit : (e: React.ChangeEvent<HTMLFormElement>) => void = e => {
        const firstName = e.currentTarget["first-name"].value;
        const lastName = e.currentTarget["last-name"].value;

        alert(`User Name：${firstName} ${lastName}`);
        e.preventDefault();
    };

    return (
        <div className="app">
            <header className="app-header">Jia Wei's React Demo</header>
            <main className="app-body">
                <h2 className="body-title">Personal Info</h2>
                <form className="input-form" onSubmit={handleSubmit}>
                    <InputField  labelName="First Name: "
                    name="firstName"
                    id="first-name"
                    value={firstName}
                    onChange={ e => setFirstName(e.currentTarget.value)}
                    />
                    <InputField labelName="Last Name: "
                        name="lastName"
                        id="last-name"
                        value={lastName}
                        onChange={e => setLastName(e.currentTarget.value)}
                    />
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Gender</legend>
                        <RedioInput 
                            id="gender-female"
                            name="gender"
                            displayValue="Female"
                            value="female"
                            checked={gender==='female'}
                            onChange={e => setGender(e.currentTarget.value)}
                        />
                        <RedioInput
                            id="gender-male"
                            name="gender"
                            displayValue="Male"
                            value="male"
                            checked={gender === 'male'}
                            onChange={e => setGender(e.currentTarget.value)}
                        />
                    </fieldset>
                    <button className="button" disabled={!lastName || !firstName}>Submit</button>
                </form>
            </main>
        </div> 
    );
}

export default App;