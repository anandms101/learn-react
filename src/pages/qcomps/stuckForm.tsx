import React, { useState } from 'react';

/**
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */
export default function Form() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleReset() {
    setFormData({ firstName: '', lastName: '' });
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <h1>Hi, {formData.firstName} {formData.lastName}</h1>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}