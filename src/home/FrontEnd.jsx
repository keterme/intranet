import React,{ useState } from 'react';

export default function FrontEnd() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(e) {
    const {name,value} = e.target;
    setPerson((prev) => {
      return {...prev, [name]: value}
    })
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleChange}
          type="text"
          name="email"          
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        {person.email}
      </p>
    </>
  );
}
