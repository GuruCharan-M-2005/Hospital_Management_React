import React, { useState } from 'react';
import '../Form.css'; // Import the same CSS file used for Login
import Sidebar from '../sidebar/sidebar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement contact form submission logic
    console.log({ name, email, content });
  };

  return (
    <div>
        <Sidebar/>

    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;