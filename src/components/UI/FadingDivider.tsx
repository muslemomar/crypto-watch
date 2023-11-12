import React from "react";
import { Divider } from "@mui/material";

const FadingDivider = () => {
  return (
    <Divider
      variant="middle"
      sx={{
        border: 0,
        height: "1px",
        background: "transparent",
        backgroundImage:
          "linear-gradient(to right, rgb(255 255 255 / 0.4), transparent)",
      }}
    />
  );
};

export default FadingDivider;
