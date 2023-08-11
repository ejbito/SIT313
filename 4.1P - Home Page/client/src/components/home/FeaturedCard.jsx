import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";

const cardHover = {
  "&:hover": { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)" },
};

export default function FeaturedCard(props) {
  return (
    <Card elevation={0} sx={cardHover}>
      <CardMedia sx={{ width: 280, height: 280 }} image={props.img} />
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {props.name}
        </Typography>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body2">{props.description}</Typography>
        <Box display="flex" alignItems="center">
          <Rating
            size="small"
            precision={0.5}
            name="read-only"
            value={props.rating}
            readOnly
          />
          <Typography variant="h7" paddingLeft="0.5rem">
            {props.rating}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
