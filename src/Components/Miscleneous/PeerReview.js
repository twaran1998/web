import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  heading: {
    textAlign: "center",
    margin: theme.spacing(4),
  },
  experience: {
    fontWeight: "bold",
  },
}));

function PeerReviews() {
  const classes = useStyles();
  const [peerReview, setPeerReview] = useState([]);

  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => setPeerReview(response.data.PeerReview))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Typography
        variant='h4'
        component='h1'
        style={{
          textDecorationColor: "green",
          textDecorationLine: "underline",
          lineBreak: 2,
        }}
        className={classes.heading}
      >
        <strong>Peer Review</strong>
      </Typography>
      <Grid container spacing={6}>
        {peerReview.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.experience}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant='h6'
                  component='h2'
                  className={classes.experience}
                >
                  {review.experience}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PeerReviews;
