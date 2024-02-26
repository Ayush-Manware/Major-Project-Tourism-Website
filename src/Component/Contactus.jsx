import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate()

  const { name, email, message } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // const response = await axios.post('https://tourism-backend-file.onrender.com/', formData); 
      // console.log(response.data); 
      navigate("/")
    } catch (error) {
      console.error('Submission Error:', error); 
    }
  };

  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      <footer/>
    </div>
  );
};

export default ContactForm;
