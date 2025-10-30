import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const sections = ["home", "services", "members", "contact"];

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ backgroundColor: "#1976d2" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "bold" }}
        >
          CloudVirtus
        </Typography>
        <Box>
          {sections.map((section) => (
            <Button
              key={section}
              color="inherit"
              component={Link}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{ textTransform: "capitalize", mx: 1 }}
            >
              {section}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
