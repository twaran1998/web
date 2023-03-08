import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgb(10,102,194)",
  },
  heading: {
    color: "white",
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: 240,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.heading}>
          Anshul Srivastava
        </Typography>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                component="a"
                href={item.link}
                key={item.label}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
