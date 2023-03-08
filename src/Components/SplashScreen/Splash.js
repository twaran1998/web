import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Chip from "@mui/material/Chip";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#808080",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: theme.spacing(3),
  },
  animation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "5px",
    backgroundColor: "linear-gradient(to right, #00FFFF, #0000FF)",
    animation: "$animate 2s ease-in-out infinite",
  },
  "@keyframes animate": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
}));

function Splash() {
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to another page after 5 seconds
      window.location.href = "../portfolio/App.js";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.container}>
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Avatar"
        variant="outlined"
      />
      <Typography variant="h1" className={classes.text}>
        Portfolio Website
      </Typography>
      <div className={classes.animation}></div>
    </div>
  );
}

export default Splash;
