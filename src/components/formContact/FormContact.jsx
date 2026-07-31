import React, { useRef, useState, useEffect } from 'react';
import EmailService from '../../services/EmailService';
import closingCrossPath from '../../assets/icons/closing_cross.svg';
import iconContactPath from '../../assets/icons/contact.svg';
import iconCheckPath from '../../assets/icons/check.svg';
import ReCAPTCHA from 'react-google-recaptcha';

import './FormContact.scss';

const FormContact = () => {
  const form = useRef();
  const [sendEmail, setSendEmail] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  useEffect(() => {
    const emailStorage = sessionStorage.getItem('sendEmail');
    if (emailStorage === 'true') {
      setSendEmail(true);
    }
  }, []);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const { email, subject, message } = form.current;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email.value.trim());

    if (
      email.value.trim() !== '' &&
      subject.value.trim() !== '' &&
      message.value.trim() !== '' &&
      isEmailValid &&
      captchaValue
    ) {
      const response = await EmailService.sendEmail(form.current);

      if (response.status === 200) {
        sessionStorage.setItem('sendEmail', true);
        setSendEmail(true);
      } else {
        setSendError(true);
      }
    } else {
      setSendError(true);
    }
    setIsLoading(false);
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
            <h1>Contact</h1>
            <p className="form-description">
              N'hésitez pas à me contacter via le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.
            </p>
            <p className="form-description">À très bientôt !</p>
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
                  placeholder="Sujet"
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
                {sendError && <span>Une erreur est survenue</span>}
              </div>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                hl="fr"
              />
              {!isLoading ? (
                <input
                  className="submit-button"
                  type="submit"
                  value="Envoyer le message"
                />
              ) : (
                <input
                  className="submit-button"
                  type="submit"
                  value="Envoi en cours..."
                  disabled
                />
              )}
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
            <h1>Merci</h1>
            <img className="icon-check" src={iconCheckPath} alt="check" />
            <p>Votre message a bien été envoyé, à très bientôt !</p>
            <div className="bottom-space"></div>
          </>
        )}
      </div>
    </article>
  );
};

export default FormContact;
