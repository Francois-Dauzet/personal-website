import emailjs from '@emailjs/browser';

const EmailService = {
  sendEmail: async (formData) => {
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      return response;
    } catch (error) {
      throw new Error('Failed to send email: ' + error);
    }
  },
};

export default EmailService;
