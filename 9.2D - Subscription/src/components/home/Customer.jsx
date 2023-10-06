import * as React from "react";
import Customers from "../../data/CustomerData";
import FeaturedCard from "./FeaturedCard";
import { Button, Box, Typography } from "@mui/material";

export default function Customer() {
  return (
    <div>
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="h4"
        margin={4}
        sx={{ fontWeight: "bold" }}
      >
        Featured Customers
      </Typography>
      <Box
        maxWidth="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="20vh"
      >
        {Customers.map((customer, index) => (
          <Box key={index} mx={2}>
            <FeaturedCard
              name={customer.name}
              description={customer.description}
              rating={customer.rating}
              img={customer.img}
            />
          </Box>
        ))}
      </Box>
      <Box
        maxWidth="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        m={4}
      >
        <Button variant="contained" size="large">
          See More
        </Button>
      </Box>
    </div>
  );
}
