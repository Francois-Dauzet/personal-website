import React, { useState } from 'react';
import closingCrossPath from '../../assets/icons/closing_cross.svg';
import iconContactPath from '../../assets/icons/contact.svg';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert('Email service not connected');

    setFormData({
      email: '',
      subject: '',
      message: '',
    });
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button translate="no" type="submit">
            Submit
          </button>
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
