import React from 'react';

//* Styles
import './PrivacySection.scss';

const PrivacySection = () => {
  return (
    <section>
      <div className="container-privacy">
        <div className="item-privacy">
          <h3>Collection and Use of Information</h3>
          <p>
            I use Google Tag Manager (GTM) and Google Analytics (GA) to track
            activity on my website, such as clicks, pages visited, type of
            device used, browser used, and country of connection. However, I do
            not collect any personally identifiable information in this manner.
            I track this data in an aggregated and anonymous way for the purpose
            of improving my website and user experience.
          </p>
          <p>
            If you contact me via my contact form, I will collect your email
            address, the subject of your message, and the content of your
            message. This information is used solely for the purpose of
            responding to your inquiry and will never be shared with third
            parties without your consent.
          </p>
          <p>
            When you send an email via my EmailJS service, only your email
            address, the subject, and the message you entered are directly
            transmitted to me via email. No other information is collected or
            stored by third parties.
          </p>
        </div>
        <div className="item-privacy">
          <h3>Cookies and Tracking Technologies</h3>
          <p>
            I use cookies to track user activity on my website in order to
            improve my service. These cookies do not contain any personally
            identifiable information and can be disabled in your browser
            settings if desired.
          </p>
        </div>
        <div className="item-privacy">
          <h3>Data Security</h3>
          <p>
            I take reasonable measures to protect your personal information
            against unauthorized access, disclosure, alteration, or destruction.
          </p>
        </div>
        <div className="item-privacy">
          <h3>Changes to the Privacy Policy</h3>
          <p>
            I reserve the right to update this Privacy Policy at any time. I
            encourage you to regularly review this page for any changes.
          </p>
        </div>
        <div className="item-privacy">
          <h3>Contact Me</h3>
          <p>
            If you have any questions regarding this privacy policy, please
            contact me via the contact form available on the website.
          </p>
        </div>
        <div className="item-privacy">
          <span>Last updated: 26/04/2024</span>
        </div>
      </div>
    </section>
  );
};
export default PrivacySection;
