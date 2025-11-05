import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setSendError("");
    setSent(false);

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        const msg = "Form is not configured, Please try again later.";
        console.error(
          "EmailJS environment variables are not set. Message not sent."
        );
        setSendError(msg);
        return;
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, {
        publicKey: PUBLIC_KEY,
      });

      reset();
      setSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setSendError("Failed to send message. Please try again later.");
    }
  };

  const [sendError, setSendError] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          autoComplete="name"
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
          autoComplete="email"
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={8}
          {...register("message", { required: "Message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <span className="error-message">{errors.message.message}</span>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>

      {sendError && (
        <div className="error-message" role="alert">
          {sendError}
        </div>
      )}

      {sent && <div className="success-message">Message sent!</div>}
    </form>
  );
};

export default ContactForm;
