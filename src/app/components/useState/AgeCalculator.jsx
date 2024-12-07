'use client'
import React, {useState} from 'react'

const AgeCalculator = () => {
  // Set Birthday value to Today.
  const [ birthDay, setBirthDay] = useState(new Date());
  // Age value set to null until the Calculate Age button is pressed.
  const [ age, setAge ] = useState(null);
  // CSS styling to hide the response until age is not null anymore.
  const ageStyle = {
    opacity: (age === null) ? 0 : 100
  };

  // On each event change update the birthday value.
  const handleBirthDay = event => {
    setBirthDay(new Date(event.target.value))
  }

  // Function to calculate age and return the number of years between today and the birthday set by the user. 
  function calculateAge() {
    setAge(Math.floor((new Date().getTime() - birthDay.getTime()) / (1000 * 3600 * 24 * 365)));
  }
  
  return (
    <div>
      <div>Age Calculator</div>
      <span>
        <p>Your Birthday</p>
        <input type='date' id='birthDate' onChange={handleBirthDay}></input>

        <button onClick={calculateAge}>Calculate Age</button>
        <div style={ageStyle}>You are {age} years old.</div>
      </span>

    </div>
  )
}

export default AgeCalculator