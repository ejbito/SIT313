// Load environment variables from '.env'
require('dotenv').config();
// Import modules and create an instance
const express = require('express');
const sgMail = require('@sendgrid/mail');
const path = require('path');

// SendGrid API key from 'SENDGRID_API_KEY' in '.env'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 'app' - Create an instance of Express server created
// 'port' - Set localhost port to 3000
const app = express();
const port = process.env.PORT || 3000;

// Setup middleware to serve static files from 'public' directory
// Can serve 'index.html' file and any other asset
app.use(express.static(path.join(__dirname, 'public')));

// Setup middleware to parse incoming JSON data
// Enables server to handle JSON in request body
app.use(express.json());

// Defines route handler for '/subscribe' endpoint
// Email address expected in request body
// Handles email subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Represents email payload
  // Contains recipient and sender email, subject, plain text,
  // and HTML version of email.
  const msg = {
    to: email,
    from: 's222276176@deakin.edu.au',
    subject: 'Welcome to DevLink',
    text: 'Thank you for subscribing to DevLink. We look forward to connecting with you!',
    html: '<p>Thank you for subscribing to DevLink. We look forward to connecting with you!</p>',
  };

  // '.send(msg)' - function called to send welcome message using SendGrid
  // '.then()' - IF email is sent successfully, success message is shown,
  // IF emaul is NOT sent, error message is shown.
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

// Route handler for the root URL '/'
// Sends 'index.html' file to the client
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
// Message shown to indicate server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});