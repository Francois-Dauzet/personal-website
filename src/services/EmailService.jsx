const EmailService = {
  sendEmail: async (formElement) => {
    try {
      const formData = new FormData(formElement);
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData,
      });

      return { status: response.status };
    } catch (error) {
      throw new Error('Failed to send email: ' + error);
    }
  },
};

export default EmailService;
