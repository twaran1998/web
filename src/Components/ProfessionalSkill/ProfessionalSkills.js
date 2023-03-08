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
  Box,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableHeading: {
    backgroundColor: "rgb(10,102,194)",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
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
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  tableContainer: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

const ProfessionalSkills = () => {
  const classes = useStyles();
  const [professionalSkillsData, setProfessionalSkillsData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => {
        setProfessionalSkillsData(response.data.professionalSkills);
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
              <Typography variant='h6'>
                {" "}
                <InfoIcon /> Technical Skills
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {open && (
          <TableBody>
            {professionalSkillsData.map((skill, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell className={classes.tableData}>
                  <Typography
                    className={classes.tableSubheading}
                    variant='subtitle1'
                  >
                    {skill.skillName}
                  </Typography>
                  <Box ml={2}>
                    <Typography variant='body1'>{skill.skillNeed}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default ProfessionalSkills;
