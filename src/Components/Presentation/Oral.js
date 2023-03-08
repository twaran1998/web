import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import {
  AccountCircle,
  Event,
  LocationOn,
  ExpandMore,
} from "@material-ui/icons";
import axios from "axios";
import { useState } from "react";
import { Collapse } from "@material-ui/core";
import { useEffect } from "react";
const useStyles = makeStyles({
  card: {
    color: "#fff",
    marginBottom: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "50px",
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box",
    cursor: "pointer",
    backgroundColor: "rgb(10,102,194)",
  },

  expandIcon: {
    color: "#fff",
    marginLeft: "auto",
  },
  stepContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    color: "black",
  },
  stepIcon: {
    marginRight: "0.5rem",
  },
  cardContent: {
    backgroundColor: "white",
  },
});

function Oral() {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => setEvents(response.data.oral))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Card className={classes.card}>
      <div className={classes.header} onClick={handleExpandClick}>
        <Typography variant="h5" component="h2" className={classes.title}>
          <ExpandMore className={classes.expandIcon} /> Oral
        </Typography>
      </div>
      <Collapse in={expanded}>
        <CardContent className={classes.cardContent}>
          {events.map((event, index) => (
            <div key={index} className={classes.stepContainer}>
              <div className={classes.stepIcon}>
                {event.name && <AccountCircle />}
                {event.date && <Event />}
                {event.location && <LocationOn />}
              </div>
              <div>
                <Typography variant="subtitle1" gutterBottom>
                  {event.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {event.date}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {event.location}
                </Typography>
              </div>
            </div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Oral;
