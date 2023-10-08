import * as React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Signup() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok)
                throw new Error(data.message || "Something went wrong...");

            alert(data.message);

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" justifyContent="center" alignItems="center" m={4}>
            <Typography variant="h5" sx={{ paddingRight: 2, fontWeight: "bold" }}>
                SIGN UP FOR OUR DAILY INSIDER
            </Typography>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ paddingRight: 2 }}
            />
            <Button type="submit" variant="contained" size="medium">
                See More
            </Button>
        </Box>
    );
}
