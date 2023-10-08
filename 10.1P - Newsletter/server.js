require("dotenv").config();
const express = require("express");
const sgMail = require("@sendgrid/mail");
const path = require("path");
const cors = require("cors");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

app.post("/subscribe", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    } else if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email address" });
    }

    const msg = {
        to: email,
        from: "s222276176@deakin.edu.au",
        subject: "Welcome to DevLink",
        text: "Thank you for subscribing to DevLink. We look forward to connecting with you!",
        html: "<p>Thank you for subscribing to DevLink. We look forward to connecting with you!</p>",
    };

    sgMail
    .send(msg)
    .then(() => {
      console.log("Welcome email sent successfully");
      res.send({ status: "success", message: "Welcome email sent successfully" });
    })
    .catch((error) => {
      console.error("Error sending welcome email", error);
      res.status(500).json({ message: error.message });
    });
});
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});