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
        <Box mx={2}>
          <FeaturedCard
            name={Customers[0].name}
            description={Customers[0].description}
            rating={Customers[0].rating}
            img={Customers[0].img}
          />
        </Box>
        <Box mx={2}>
          <FeaturedCard
            name={Customers[1].name}
            description={Customers[1].description}
            rating={Customers[1].rating}
            img={Customers[1].img}
          />
        </Box>
        <Box mx={2}>
          <FeaturedCard
            name={Customers[2].name}
            description={Customers[2].description}
            rating={Customers[2].rating}
            img={Customers[2].img}
          />
        </Box>
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
