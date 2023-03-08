import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableHeading: {
    backgroundColor: "rgb(10,102,194)",
    color: "white",
    fontWeight: "bold",
  },
  tableRow: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableSubheading: {
    fontWeight: "bold",
  },
  tableData: {
    paddingLeft: theme.spacing(4),
  },
  tableContainer: {
    marginTop: theme.spacing(5),
  },
}));

const CoursesAndTraining = () => {
  const classes = useStyles();
  const [coursesAndTrainingData, setCoursesAndTrainingData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => {
        setCoursesAndTrainingData(response.data.CoursesandTraning);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <TableContainer
      component={Paper}
      className={classes.tableContainer}
      style={{ marginTop: "50px" }}
    >
      <Table>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell
              className={classes.tableHeading}
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6">
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}Course and
                Training
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {open && (
          <TableBody>
            {coursesAndTrainingData.map((course, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell className={classes.tableData}>
                  <Typography
                    className={classes.tableSubheading}
                    variant="subtitle1"
                  >
                    {course.name}
                  </Typography>
                  <Typography variant="body1">{course.date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default CoursesAndTraining;
