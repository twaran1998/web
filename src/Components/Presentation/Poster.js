import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(10, 102, 194)",
    color: "white",
  },
  icon: {
    color: "white",
  },
  table: {
    marginTop: "50px",
  },
});

function Posters() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://twaran123.github.io/AS_P/info.json")
      .then((response) => response.json())
      .then((data) => setData(data.posters));
  }, []);

  const handleRowClick = () => {
    setOpen(!open);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.root}>
          <TableCell>
            <Typography variant="h6" className={classes.icon}>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={handleRowClick}
                className={classes.icon}
              >
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>{" "}
              Posters
            </Typography>
          </TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <TableBody>
                {data.map((poster) => (
                  <React.Fragment key={poster.id}>
                    <TableRow hover>
                      <TableCell align="left">{poster.name}</TableCell>
                      <TableCell align="left">{poster.date}</TableCell>
                      <TableCell align="left">{poster.location}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={4}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Typography variant="body1">
                            {poster.description}
                          </Typography>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}

export default Posters;
