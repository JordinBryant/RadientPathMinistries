import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const list = () => (
    <List>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/hair-care"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Hair Care" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/biblical-diet"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Biblical Diet" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/biblical-wealth"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Biblical Wealth" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/contact"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/merchandise"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="Merchandise" />
      </ListItem>
    </List>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ marginLeft: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#ffa726",
          },
        }}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
