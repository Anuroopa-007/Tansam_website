const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // Use 587 if you're not using SSL
  secure: true, // true for 465, false for 587
  auth: {
    user: 'contact@tansam.org',   // Your Hostinger email
    pass: '=35;ssWv'                      // Use your actual password or app password
  }
});

// Date formatting function → DD Month YYYY
function formatDateToWords(dateString) {
  if (!dateString) return "N/A";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  const day = String(date.getDate()).padStart(2, "0");
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${monthName} ${year}`;
}

async function sendInternshipEmail(data) {
  const mailOptions = {
    from: '"Internship Form" <contact@tansam.org>',
    to: 'contact@tansam.org',
    cc: ['hr@tansam.org', 'hannahrr@tansam.org', 'nateshc@tansam.org'],
    subject: 'New Internship Application',

    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #eef2f7;">
        <div style="max-width: 600px; margin: 0 auto; background:#ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #dce3eb;">

          <div style="background: linear-gradient(90deg, #4A90E2, #357ABD); padding: 20px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px; font-weight: 600;">New Internship Application</h2>
          </div>

          <div style="padding: 25px; color: #333;">
            <p style="font-size: 16px; margin-bottom: 15px;">
              A new internship application has been submitted. Details are as follows:
            </p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${data.fullName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Contact:</td><td>${data.contactNumber}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">College:</td><td>${data.collegeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Start Date:</td><td>${formatDateToWords(data.startDate)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">End Date:</td><td>${formatDateToWords(data.endDate)}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Duration:</td><td>${data.duration}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Course:</td><td>${data.course}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Referred By:</td><td>${data.referredBy || 'N/A'}</td></tr>
            </table>
          </div>

          <div style="background: #f5f7fa; padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #e1e6ec;">
            © ${new Date().getFullYear()} TANSAM. All rights reserved.
          </div>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


async function sendContactMessage(data) {
  const mailOptions = {
    from: '"Contact Form" <contact@tansam.org>',
    to: 'contact@tansam.org',
    cc: ['hr@tansam.org'],
    subject: 'New Contact Message',
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}

async function sendFeedbackEmail(data) {
  const mailOptions = {
    from: '"Feedback Form" <contact@tansam.org>',
    to: 'contact@tansam.org',
    cc: ['hr@tansam.org'],
    subject: 'New Visitor Feedback',
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2>Visitor Feedback</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Designation:</strong> ${data.designation}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Visit Purpose:</strong> ${data.visitPurpose}</p>
        <p><strong>Rating:</strong> ${data.rating} / 5</p>
        <p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Feedback email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending feedback email:', error);
    throw error;
  }
}

module.exports = { sendInternshipEmail, sendContactMessage, sendFeedbackEmail };
