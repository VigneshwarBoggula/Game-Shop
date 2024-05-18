import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './contact.css'; // Import your CSS or use Styled Components here

const ContactForm = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
          <div className="address">
            <h1>Contact Us</h1>
            <p>Email: <a href="kaiwm@uci.edu">kaiwm@uci.edu</a></p>
            <p>Phone: <a href="(+1) 111-111-1111">(+1) 111-111-1111</a></p>
          </div>
          <div className="inquiry">
            <form>
              <h1>Email Us Directly</h1>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" /><br /><br />
              <label htmlFor="email">Email:</label>
              <input type="text" id="text" /><br /><br />
              <label htmlFor="question">Your Question:</label><br />
              <textarea id="question" name="question" rows="5" cols="50"></textarea><br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
  );
};

export default ContactForm;
