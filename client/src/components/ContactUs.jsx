import React from "react";
import styles from '../assets/styles/ContactUs.module.scss';


const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact us</h2>
      <p className={styles.subtitle}>Reach out to us and let us know if there is anything we can do for you</p>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="optIn" name="optIn" />
          <label htmlFor="optIn">I opt-in to receive marketing and promotional materials</label>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>

      <p className={styles.recaptchaNote}>
        This form is protected by reCAPTCHA and the Google 
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and 
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
      </p>
    </div>
  );
};

export default ContactUs;
