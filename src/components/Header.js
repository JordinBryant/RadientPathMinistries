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

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Radiant Path Ministries
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
