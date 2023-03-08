import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Chip } from "@mui/material";

function PublicationCard() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function fetchPublications() {
      const response = await fetch(
        "https://twaran123.github.io/AS_P/info.json"
      );
      const data = await response.json();
      setPublications(data.publications);
    }
    fetchPublications();
  }, []);

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={12}>
        <Typography
          style={{
            marginTop: "30px",
            marginBottom: "10px",
            textDecorationColor: "green",
            textDecorationLine: "underline",
            lineBreak: 2,
            // textDecoration: "underline",
          }}
          variant='h4'
          align='center'
          gutterBottom
        >
          <strong>Publication</strong>
        </Typography>
      </Grid>
      {publications.map((publication) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={publication.pub_id}>
          <Card
            style={{
              height: "280px",
              width: "100%",
              display: "flex",

              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Added box-shadow
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1,
                variant: "body1",
                textAlign: "center",
                fontFamily: "Open Sans",
              }}
            >
              <Typography
                variant='body1'
                style={{
                  marginBottom: "10px",
                  fontFamily: "Roboto",
                }}
              >
                {publication.title.split(" ").slice(0, 20).join(" ")}
              </Typography>
              <Typography
                variant='body1'
                style={{
                  marginBottom: "10px",
                  fontFamily: "Roboto",
                }}
              >
                <strong>Publication Date:</strong> {publication.date}
              </Typography>
              <Chip
                label={publication.Author}
                color='secondary'
                sx={{ backgroundColor: "red" }}
              />
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                href={publication.url}
                target='_blank'
                rel='noopener'
                variant='contained'
                style={{
                  borderRadius: "50px",
                  backgroundColor: "rgb(10,102,194)",
                  color: "#000",
                }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PublicationCard;
