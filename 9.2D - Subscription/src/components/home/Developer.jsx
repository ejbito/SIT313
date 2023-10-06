import * as React from "react";
import Developers from "../../data/DeveloperData";
import FeaturedCard from "./FeaturedCard";
import { Button, Box, Typography } from "@mui/material";

export default function Developer() {
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
        Featured Developers
      </Typography>
      <Box
        maxWidth="lg"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="20vh"
      >
        {Developers.map((developer, index) => (
          <Box key={index} mx={2}>
            <FeaturedCard
              name={developer.name}
              description={developer.description}
              rating={developer.rating}
              img={developer.img}
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
