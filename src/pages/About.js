// about exprssn
import React from 'react';
import profilePic from './images/profilePic.jpg';

function about() {
  return (
    <div className="container pt-5" id="">
      <h1
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: '45px',
          paddingTop: '5rem',
          paddingBottom: '2rem',
        }}
      >
        ABOUT ME 😊
      </h1>
      <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        Hi! My name is Gil. Thank you for visiting my portfolio website.
      </p>
      <p></p>
      <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        I like to consider myself as someone who is constantly motivated,
        self-driven, and ambitious. Works hard to become one of the
        knowledgeable people in the group others go to when they’re stuck
        looking for their next step. Enjoys working with groups, but can also
        appreciate time solving problems alone to gain more of an in-depth
        understanding. I consider myself someone who has a healthy level of
        confidence which enables me to have good communication, collaboration,
        and presentation skills. Diverse knowledge covering multiple fields
        ranging from Finance, Manufacturing, Full Stack Web Development, and
        more.
      </p>
      {/* <p style={{ textAlign: 'center', color: 'black', paddingBottom: '1rem' }}>
        Sincerely,
      </p>*/}
      {/* <p
        style={{
          textAlign: 'center',
          color: 'black',
          paddingBottom: '5rem',
          fontStyle: 'italic',
        }}
      >
        EXPRSSN
      </p> */}{' '}
      <br></br>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={profilePic}
          alt="sign"
          className="center"
          style={{ marginBottom: 30 }}
        ></img>
      </div>
    </div>
  );
}

export default about;
