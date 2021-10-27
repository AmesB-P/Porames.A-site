import { AwesomeButton, AwesomeButtonStyles,AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
// import React, { useRef } from "react";
import "./contacts.css";
// import AwesomeButton from "react-native-really-awesome-button";
const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="btn-sendmail">
        <div className="contact-header">
          <h1>Contact me</h1>
        </div>
        <div>
        <p>
          Phone : 094-5276440
          </p>
          <p>
            Email : p.atipattranan@gmail.com
          </p>
        </div>
        <div className="btn-boxMain">
        <div className="btn-box">
          <AwesomeButtonSocial
          colorScheme="brand"
            cssModule={AwesomeButtonStyles}
            type="mail"
            size="large"
            className="awesome-btn"
            icon={true}
            href='mailto:p.atipattranan@gmail.com'
          >
          </AwesomeButtonSocial>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
