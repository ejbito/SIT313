import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function Signup() {
  const [email, setEmail] = useState("");

  const sendEmail = () => {
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
        console.log("Email sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" m={4}>
        <Typography variant="h5" sx={{ paddingRight: 2, fontWeight: "bold" }}>
          SIGN UP FOR OUR DAILY INSIDER
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          sx={{ paddingRight: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" size="medium" onClick={sendEmail}>
          See More
        </Button>
      </Box>
    </div>
  );
}
