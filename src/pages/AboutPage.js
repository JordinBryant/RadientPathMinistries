// pages/AboutPage.js
import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import "./AboutPage.css"; // Styles specific to the about page

function AboutPage() {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, textAlign: "center" }}
        >
          About Us
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Our Mission
          </Typography>
          <Typography>
            We are dedicated to providing quality services and products that
            empower our community to achieve their health and wellness goals.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Our Story
          </Typography>
          <Typography>
            Founded on principles of faith and integrity, we strive to make a
            difference in every life we touch. Our journey began with a simple
            vision...
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Meet the Team
          </Typography>
          <Typography>
            Our team consists of passionate individuals who are committed to
            making a positive impact. Learn more about each member and their
            roles...
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Thank you for visiting our page! We look forward to connecting with
            you.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default AboutPage;
