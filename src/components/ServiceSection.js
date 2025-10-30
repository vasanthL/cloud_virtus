import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const services = [
  {
    title: "Cloud Migration",
    desc: "Move your infrastructure, data, and applications to the cloud seamlessly and securely.",
    img: "/use1.jpg",
  },
  {
    title: "Data Analytics",
    desc: "Leverage AI-driven insights to make smarter, data-informed business decisions.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Data Engineering",
    desc: "Build scalable data pipelines and cloud-native architectures for modern analytics.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  },
];

const ServicesSection = () => {
  return (
    <Container id="services" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        fontWeight="bold"
      >
        Our Services
      </Typography>
      <Grid container spacing={4} mt={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.title}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={service.img}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
