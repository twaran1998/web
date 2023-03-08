import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Collapse,
  Box,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  tableHead: {
    backgroundColor: "rgb(10,102,194)",
  },
  tableCell: {
    color: "white",
    fontWeight: "bold",
  },
});
function DisplayEducation() {
  const [workExperience, setWorkExperience] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => {
        setWorkExperience(response.data.workExperience);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // create a separate state for each row to control the expand/collapse behavior of the corresponding collapse component
  const [openIndex, setOpenIndex] = useState(-1);

  const handleOpen = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableCell}></TableCell>
            <TableCell className={classes.tableCell}>Job Address</TableCell>
            <TableCell className={classes.tableCell}>Job Designation</TableCell>
            <TableCell className={classes.tableCell}>Job Date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {workExperience.map((row, index) => (
            <React.Fragment key={row.Job_id}>
              <TableRow>
                <TableCell>
                  <Avatar
                    alt='Example Image'
                    src={row.url}
                    variant='round'
                    style={{ width: 70, height: 45 }}
                  />
                </TableCell>
                <TableCell>{row.Job_address}</TableCell>
                <TableCell>{row.Job_designation}</TableCell>
                <TableCell>{row.Job_date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(index)}>
                    {openIndex === index ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  colSpan={4}
                >
                  <Collapse
                    in={openIndex === index}
                    timeout='auto'
                    unmountOnExit
                  >
                    <Box margin={1} bgcolor='#111'>
                      <Typography
                        variant='body1'
                        color='textPrimary'
                        gutterBottom
                        component='div'
                      >
                        Job Detail
                      </Typography>
                      <Table size='small' aria-label='job-stats'>
                        <TableBody>
                          <TableRow>
                            <TableCell>{row.Job_stat_one}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>{row.Job_stat_two}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DisplayEducation;
