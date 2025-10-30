import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} CloudVirtus. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
