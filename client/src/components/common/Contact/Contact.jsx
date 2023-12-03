import React, { useState } from "react";
import "./Contact.scss";
import { MdMarkEmailRead } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (inputEmail) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(inputEmail);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      emailjs.sendForm(
        "service_uk91ohd",
        "template_2rbsar7",
        form.current,
        "yYS4ZmHKNaE4i0J3H"
      );
      e.target.reset();
    } else {
      setEmailError("Invalid email address");
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option1">
            <MdMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:e.u.kotenko@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option2">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <a
              href="https://t.me/Yevhenii_Kotenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option3">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/380662368714"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          <span className="error-message">{emailError}</span>
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
