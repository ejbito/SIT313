require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create an instance of the Express server
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Route for handling email submission
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Create the email payload
  const msg = {
    to: email,
    from: 's222276176@deakin.edu.au', // Replace with your email address
    subject: 'Welcome to DevLink',
    text: 'Thank you for subscribing to DevLink. We look forward to connecting with you!',
    html: '<p>Thank you for subscribing to DevLink. We look forward to connecting with you!</p>',
  };

  // Send the welcome email using SendGrid
  sgMail
    .send(msg)
    .then(() => {
      console.log('Welcome email sent successfully');
      res.status(200).json({ message: 'Welcome email sent successfully' });
    })
    .catch((error) => {
      console.error('Error sending welcome email', error);
      res.status(500).json({ message: 'Error sending welcome email' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
