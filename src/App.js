import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h2>Submit Form</h2>
      <form className="formStyle" onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Your Name'
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            placeholder='Your Phone Number'
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber} 
          />
          <input
            placeholder='Email'
            name="email"
            onChange={handleChange}
            value={formData.email} 
          />
        </div>
        
        <div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>

      {submittedData && (
        <div className="submittedData">
          <h2>Submitted Data</h2>
          <p>Your Name: {submittedData.fullName}</p>
          <p>Your Phone Number: {submittedData.phoneNumber}</p>
          <p>Your Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
