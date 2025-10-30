import { Box, Typography, Grid, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        px: 3,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Email */}
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <EmailIcon sx={{ fontSize: 40, color: "#1976D2", mb: 1 }} />
            <Typography variant="h6">Email</Typography>
            <Typography variant="body1">contact@cloudvirtus.com</Typography>
          </Paper>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PhoneIcon sx={{ fontSize: 40, color: "#1976D2", mb: 1 }} />
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body1">+1 (555) 123-4567</Typography>
          </Paper>
        </Grid>

        {/* Location */}
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ fontSize: 40, color: "#1976D2", mb: 1 }} />
            <Typography variant="h6">Location</Typography>
            <Typography variant="body1">
              123 Tech Street, Silicon Valley, CA
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactSection;
