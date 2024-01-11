import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');

    function onFormSubmit(event) {
        event.preventDefault();
        const body = {
            firstName,
            lastName,
            city,
        };

        /*    This is just an example
            fetch('http://www.example.com', {
                method: 'POST',
                body: JSON.stringify(body),
            }); */

    }

    function onFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function onLastNameChange(event) {
        setLastName(event.target.value);
    }
    function onCityChange(event) {
        setCity(event.target.value);
    }

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <label htmlFor='first-name'>First Name</label>
            <input value={firstName} name="first-name" placeholder="Your first name" onChange={onFirstNameChange} />
            <label htmlFor='last-name'>Last Name</label>
            <input value={lastName} name='last-name' placeholder="Your last name" onChange={onLastNameChange}/>
            <label htmlFor='city'>City</label>
            <input value={city} name="city" placeholder="Your city" onChange={onCityChange} />
            <button>Submit</button>
        </form>

    </div>
  );
}

export default App;
