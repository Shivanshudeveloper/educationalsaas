import React, { useState, useEffect } from "react";
import { API_SERVICE } from "../../../config";
import axios from "axios";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Autocomplete,
} from "@material-ui/core";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";

const List = () => {

  const dummyClasses = [
    {
      name: "CS-100",
      subject: "computer science",
      time: `${new Date().toLocaleTimeString()}`,
      date: `${new Date().toLocaleDateString()}`
    },
    {
      name: "CS-100",
      subject: "computer science",
      time: `${new Date().toLocaleTimeString()}`,
      date: `${new Date().toLocaleDateString()}`
    },
    {
      name: "CS-100",
      subject: "computer science",
      time: `${new Date().toLocaleTimeString()}`,
      date: `${new Date().toLocaleDateString()}`
    },
    {
      name: "CS-100",
      subject: "computer science",
      time: `${new Date().toLocaleTimeString()}`,
      date: `${new Date().toLocaleDateString()}`
    }
  ]

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      </div>
      <Container sx={{ mt: 5 }} maxWidth="lg">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            id="table-to-xls"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Subject</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyClasses?.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.time}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.subject}</TableCell>
                  <TableCell align="center">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default List;
