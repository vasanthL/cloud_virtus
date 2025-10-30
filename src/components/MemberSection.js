import React from "react";
import { Container, Typography, Grid, Box, Avatar } from "@mui/material";

const MembersSection = () => {
  return (
    <Box
      id="members"
      sx={{
        py: 10,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          fontWeight="bold"
          sx={{ color: "white" }}
        >
          Our AI & Cloud Experts
        </Typography>
        <Grid container spacing={4} mt={4} justifyContent="center">
          {[
            {
              name: "Vasanth loganathan",
              role: "Cloud Architect",
              img: "/vasi_.jpeg",
            },
            {
              name: "veesam chiranjeevi",
              role: "Senior Data Engineer",
              img: "/veesam.jpeg",
            },
            {
              name: "ajay kumar",
              role: "Marketing Lead",
              img: "/ajay.jpeg",
            },
          ].map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Box
                textAlign="center"
                sx={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    border: "2px solid #fff",
                  }}
                />
                <Typography variant="h6" color="white">
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MembersSection;
