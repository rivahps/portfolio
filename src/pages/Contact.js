import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import "../components/ContactForm.css";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Rivah Somerville";
  }, []);
  return (
    <div className="page-container contact-page">
      <div className="content-container">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
