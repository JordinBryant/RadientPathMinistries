import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import Sidebar from "./Sidebar"; // Import Sidebar component

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(45deg, #b3e5fc, #ffb74d, #4fc3f7)",
        color: "white",
      }}
    >
      <Toolbar>
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
            fontWeight: "bold",
            fontFamily: "cursive",
            padding: 2,
          }}
        >
          Radiant Path Ministries
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
