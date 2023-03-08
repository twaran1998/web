import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 300,
    margin: theme.spacing(2),
    height: "100%",
    borderRadius: 10,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)", // add shadow effect
  },
  media: {
    height: 200,
    width: 200,
    borderRadius: "50%", // add curvy border
  },
}));

function EduInstitute() {
  const classes = useStyles();
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => setEducation(response.data.education))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        style={{
          marginTop: "80px",
          textDecorationColor: "green",
          textDecorationLine: "underline",
          lineBreak: 2,
        }}
        variant='h4'
        className={classes.heading}
      >
        <strong>Education</strong>
      </Typography>
      <Grid container spacing={3}>
        {education.map((edu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={edu.img}
                title={edu.collegeName}
              />
              <CardContent>
                <Typography variant='h6'>{edu.collegeName}</Typography>
                <Typography variant='subtitle1'>{edu.degree}</Typography>
                <Typography variant='subtitle2'>{edu.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EduInstitute;
