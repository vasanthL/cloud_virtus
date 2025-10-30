import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";

const HomeSection = () => {
  return (
    <Box
      id="home"
      sx={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        color: "white",
        position: "relative",
        background: `linear-gradient(135deg, #0D47A1, #1976D2, #FF1744, #FF5252)`,
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)", // dark overlay to make text readable
          zIndex: 1,
        },
        "@keyframes gradientAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" style={{ color: "white" }}>
          Empower Your Business with CloudVirtus
        </Typography>
        <Typography variant="h6" mt={2}>
          Experts in Cloud Migration, Data Analytics, and Data Engineering
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4, fontWeight: "bold" }}
          component={Link}
          to="services"
          smooth={true}
          duration={500}
        >
          Explore Services
        </Button>
      </Box>
    </Box>
  );
};

export default HomeSection;
