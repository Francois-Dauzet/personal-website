import React, { useRef, useState, useEffect } from 'react';
import EmailService from '../../services/EmailService';
import closingCrossPath from '../../assets/icons/closing_cross.svg';
import iconContactPath from '../../assets/icons/contact.svg';
import iconCheckPath from '../../assets/icons/check.svg';
import './ContactForm.scss';

const ContactForm = () => {
  const form = useRef();
  const [sendEmail, setSendEmail] = useState(false);

  useEffect(() => {
    const emailStorage = sessionStorage.getItem('sendEmail');
    if (emailStorage === 'true') {
      setSendEmail(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await EmailService.sendEmail(form.current);

    if (response.status === 200) {
      sessionStorage.setItem('sendEmail', true);
      setSendEmail(true);
    }
  };

  return (
    <article>
      <div className="container-contact-form">
        {!sendEmail ? (
          <>
            <img
              className="icon-contact-form"
              src={iconContactPath}
              alt="contact icon"
            />
            <img
              className="icon-closing-cross"
              src={closingCrossPath}
              alt="closing cross"
            />
            <h1 translate="no">Contact</h1>
            <p>
              Feel free to contact me via the form below, I will respond to you
              as soon as possible.
            </p>
            <p>Hope to hear from you soon!</p>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <input
                className="submit-button"
                type="submit"
                value="Send Message"
              />
            </form>
          </>
        ) : (
          <>
            <img
              className="icon-contact-form"
              src={iconContactPath}
              alt="contact icon"
            />
            <img
              className="icon-closing-cross"
              src={closingCrossPath}
              alt="closing cross"
            />
            <h1 translate="no">Thank you</h1>
            <img className="icon-check" src={iconCheckPath} alt="check" />
            <p>Your message has been successfully sent.</p>
            <p>See you soon!</p>
            <div className="bottom-space"></div>
          </>
        )}
      </div>
    </article>
  );
};

export default ContactForm;
