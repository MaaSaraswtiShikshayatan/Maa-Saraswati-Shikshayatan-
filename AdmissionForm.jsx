import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Firebase integration pending)");
  };

  return (
    <section id="admission" className="section">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Student Name" onChange={handleChange} required />
        <input type="text" name="father" placeholder="Father's Name" onChange={handleChange} required />
        <input type="text" name="mother" placeholder="Mother's Name (Optional)" onChange={handleChange} />
        <input type="date" name="dob" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="tel" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <select name="class" onChange={handleChange} required>
          <option value="">Select Class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AdmissionForm;