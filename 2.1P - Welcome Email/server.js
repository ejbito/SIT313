require("dotenv").config();
const express = require("express");
const sgMail = require("@sendgrid/mail");
const path = require("path");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Defines route handler for '/subscribe' endpoint
// Email address expected in request body
// Handles email subscription
app.post("/subscribe", (req, res) => {
  const { email } = req.body;

  // Check if the email field is empty
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Represents email payload
  // Contains recipient and sender email, subject, plain text,
  // and HTML version of email.
  const msg = {
    to: email,
    from: "s222276176@deakin.edu.au",
    subject: "Welcome to DevLink",
    text: "Thank you for subscribing to DevLink. We look forward to connecting with you!",
    html: "<p>Thank you for subscribing to DevLink. We look forward to connecting with you!</p>",
  };

  // '.send(msg)' - function called to send welcome message using SendGrid
  // '.then()' - IF email is sent successfully, success message is shown,
  // IF emaul is NOT sent, error message is shown.
  sgMail
    .send(msg)
    .then(() => {
      console.log("Welcome email sent successfully");
      res.status(200).json({ message: "Welcome email sent successfully" });
    })
    .catch((error) => {
      console.error("Error sending welcome email", error);
      res.status(500).json({ message: "Error sending welcome email" });
    });
});

// Route handler for the root URL '/'
// Sends 'index.html' file to the client
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
// Message shown to indicate server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
