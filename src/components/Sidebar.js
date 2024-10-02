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
        <ListItemText
          primary="Home"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/hair-care"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Hair Care"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/biblical-diet"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Biblical Diet"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/biblical-wealth"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Biblical Wealth"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/merchandise"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Merchandise"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="About"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/contact"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Contact"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/donate"
        onClick={toggleDrawer(false)}
      >
        <ListItemText
          primary="Donate"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.2rem",
            color: "black",
            textShadow: "1px 1px 2px white, -1px -1px 2px white",
          }}
        />
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
