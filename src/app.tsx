import React, { useState, useEffect } from "react";
import "./app.css";
import InputField from './components/inputFields';
import RedioInput from './components/redioInput';
import Select, { SelectItem } from './components/select';
import { useSingleSelection } from './components/customHooks/useSingleSelection';
import { useMultipleSelections } from './components/customHooks/useMutipleSelections';
import { useProviceCitys } from './components/customHooks/useProviceCitys';
import { PROVINCE_NAMES } from "./constants/citys";

const defaultGradeItems: SelectItem[] = [
    { value: "junior", text: "Junior Consultant", isSelected: false },
    { value: "senior", text: "Senior Consultant", isSelected: false },
    { value: "lead", text: "Lead Consultant", isSelected: false },
];

const defaultSkillItems: SelectItem[] = [
    { value: "java", text: "Java", isSelected: false },
    { value: "csharp", text: "C#", isSelected: false },
    { value: "javascript", text: "JavaScript", isSelected: false },
    { value: "html", text: "HTML", isSelected: false },
    { value: "css", text: "CSS", isSelected: false },
    { value: "react", text: "React", isSelected: false },
    { value: "angular", text: "Angular", isSelected: false },
    { value: "vue", text: "Vue", isSelected: false },
];


const App = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [gradle, setSelectedGrade] = useSingleSelection(defaultGradeItems);
    const [skill, setSelectedSkill] = useMultipleSelections(defaultSkillItems);
    const [citys, setCitys] = useProviceCitys("");

    const cityItmes: SelectItem[] = citys.map(city => ({
        value: city.citysName,
        text: city.citysName,
        isSelected: false,
    }));

    const provinceItems: SelectItem[] = PROVINCE_NAMES.map(provinceName => ({
        value: provinceName,
        text: provinceName,
        isSelected: false,
    }))

    const [provinceSelections, setProviceSelections] = useSingleSelection(provinceItems);

    const [citySelections, setCitySelections, resetCitySelections] = useSingleSelection(cityItmes);

    useEffect(() => {
        if(citys.length === 0) {
            return;
        }
        if (!citys.some(city => citySelections.find(citySelection => citySelection.value === city.citysName))) {
            const newCitySelections: SelectItem[] = citys.map(city => ({
                value: city.citysName,
                text: city.citysName,
                isSelected: false,
            }))
            resetCitySelections(newCitySelections);
        }
    }, [citys, citySelections, resetCitySelections]);

    const handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void = e => {
        const firstName = e.currentTarget["first-name"].value;
        const lastName = e.currentTarget["last-name"].value;

        alert(`User Name：${firstName} ${lastName}`);
        e.preventDefault();
    }

    return (
        <div className="app">
            <header className="app-header">Jia Wei's React Demo</header>
            <main className="app-body">
                <h2 className="body-title">Personal Info</h2>
                <form className="input-form" onSubmit={handleSubmit}>
                    <InputField labelName="First Name: "
                        name="firstName"
                        id="first-name"
                        value={firstName}
                        onChange={e => setFirstName(e.currentTarget.value)}
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
                            checked={gender === 'female'}
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
                    <Select
                        name="grade"
                        id="select-grade"
                        items={gradle}
                        labelName="Grade: "
                        onItemClicked={setSelectedGrade}
                    />
                    <Select
                        name="skill"
                        id="select-skill"
                        items={skill}
                        labelName="Skill: "
                        onItemClicked={setSelectedSkill}
                        isMultiple={true}
                    />
                    <Select
                        name="provice"
                        id="select-provice"
                        items={provinceSelections}
                        labelName="Province: "
                        onItemClicked={selectedProvince => { setProviceSelections(selectedProvince); setCitys(selectedProvince.value) }}
                    />
                    <Select
                        name="city"
                        id="select-city"
                        items={citySelections}
                        labelName="City: "
                        onItemClicked={setCitySelections}
                        isMultiple={true}
                    />
                    <button className="button" disabled={!lastName || !firstName}>Submit</button>
                </form>
            </main>
        </div>
    );
}

export default App;