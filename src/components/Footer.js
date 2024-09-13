import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ef6c00",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        width: "100%", // Ensure it stretches the full width
        position: "relative", // Allows footer to be positioned correctly
      }}
    >
      <Typography variant="body1">
        &copy; 2024 Radiant Path Ministries
      </Typography>
    </Box>
  );
}

export default Footer;
