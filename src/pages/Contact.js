import React from 'react';
import { Container } from '@mui/material';
import './css/contact.css';

const Contact = (props) => {
  return (
    <Container>
      <form action="" onSubmit="">
        <div id="formContainer" className="formWord">
          <h2 id="header">Say Hello!</h2>
          <section id="inputSection">
            <span> Full Name</span>
            <input className="input100" type="text" name="fullName" required />
            <br />
            <span>Phone Number</span>
            <input className="input100" type="text" name="phone" required />
            <br />
            <span>Enter Email</span>
            <input className="input100" type="text" name="email" required />
            <br />
          </section>
        </div>
        <div className="formWord">
          <span>Message</span>
          <br />
          <textarea name="message" required type="text"></textarea>
          <br />
          <button className="button is-dark">SUBMIT</button>

          <div className="row"></div>
        </div>
      </form>
    </Container>
  );
};

export default Contact;
