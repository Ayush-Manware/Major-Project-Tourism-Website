import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to the server to logout
      await axios.post('https://tourism-backend-file.onrender.com/logout');
      // Redirect the user to the login page or any other page
      navigate("/login");
    } catch (error) {
      console.error('Logout Error:', error);
      // Handle logout failure, if needed
    }
  };

  return (
    <div className='logout'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
