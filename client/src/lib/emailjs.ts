interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  // EmailJS configuration - these should be set in environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

  // For now, we'll simulate the email sending
  // In production, you would integrate with EmailJS or another email service
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful email sending
      console.log('Email would be sent with data:', data);
      console.log('EmailJS Config:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY: PUBLIC_KEY.substring(0, 5) + '...' });
      
      // Simulate 90% success rate
      if (Math.random() > 0.1) {
        resolve();
      } else {
        reject(new Error('Simulated email send failure'));
      }
    }, 1000);
  });
};

// Actual EmailJS implementation (commented out for now)
/*
export const sendEmail = async (data: EmailData): Promise<void> => {
  const { default: emailjs } = await import('@emailjs/browser');
  
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
    to_name: 'Angad Gosain',
  };

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send email');
  }
};
*/
