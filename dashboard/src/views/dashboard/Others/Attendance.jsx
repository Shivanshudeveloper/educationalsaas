import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import {
  Tooltip,
  IconButton,
  Button,
  Box,
  DialogContentText,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Attendance = () => {
  return (
    <TableContainer sx={{ mt: 4 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center">ROLL NO.</TableCell>
            <TableCell align="center">CLOCK IN</TableCell>
            <TableCell align="center">CLOCK OUT</TableCell>
            <TableCell align="center">TOTAL HOURS</TableCell>
            <TableCell align="center">STATUS (IN / OUT)</TableCell>
            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell scope="row"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <Tooltip title="Delete">
                <IconButton
                  color="secondary"
                  onClick={() => {
                    //handleDelete(e);
                  }}
                  aria-label="upload picture"
                  component="span"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Attendance;
