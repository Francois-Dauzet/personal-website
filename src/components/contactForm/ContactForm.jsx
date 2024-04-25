import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import closingCrossPath from '../../assets/icons/closing_cross.svg';
import iconContactPath from '../../assets/icons/contact.svg';
import './ContactForm.scss';

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0ytma2i', 'template_7im40gs', form.current, {
        publicKey: 'NFmuo9c5p85BRQ8nk',
      })
      .then(
        () => {
          console.log('SUCCESS!', form.current);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <article>
      <div className="container-contact-form">
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
          Feel free to contact me via the form below, I will respond to you as
          soon as possible.
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
          <input className="submit-button" type="submit" value="Send Message" />
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
