import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { TextField, Button, Box } from "@mui/material";

export default function PaymentForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const result = await stripe.createToken(card, {
      name: `${name.firstName} ${name.lastName}`,
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      maxWidth="500px"
      mx="auto"
      mt={2}
    >
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="firstName"
        label="First Name"
        name="firstName"
        value={name.firstName}
        onChange={handleChange}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        value={name.lastName}
        onChange={handleChange}
      />
      <CardElement options={{ style: { base: { fontSize: "18px" } } }} />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!stripe}
        sx={{ mt: 3, mb: 2 }}
      >
        Pay
      </Button>
    </Box>
  );
}
