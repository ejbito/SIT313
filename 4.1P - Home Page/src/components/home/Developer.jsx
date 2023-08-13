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
        <Box mx={2}>
          <FeaturedCard
            name={Developers[0].name}
            description={Developers[0].description}
            rating={Developers[0].rating}
            img={Developers[0].img}
          />
        </Box>
        <Box mx={2}>
          <FeaturedCard
            name={Developers[1].name}
            description={Developers[1].description}
            rating={Developers[1].rating}
            img={Developers[1].img}
          />
        </Box>
        <Box mx={2}>
          <FeaturedCard
            name={Developers[2].name}
            description={Developers[2].description}
            rating={Developers[2].rating}
            img={Developers[2].img}
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
