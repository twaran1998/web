import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  Collapse,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import axios from "axios";

function Dummydata() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://twaran123.github.io/AS_P/info.json")
      .then((response) => setData(response.data.qualification))
      .catch((error) => console.error(error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: "rgb(10,102,194)" }}>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="h5" style={{ color: "white" }}>
                About
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((qualification) => (
            <Row
              key={qualification.qualification_id}
              qualification={qualification}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row(props) {
  const { qualification } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{qualification.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6">Description</Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>1:</TableCell>
                    <TableCell>{qualification.stat_one}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2.</TableCell>
                    <TableCell>{qualification.stat_two}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3.</TableCell>
                    <TableCell>{qualification.stat_three}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Dummydata;
