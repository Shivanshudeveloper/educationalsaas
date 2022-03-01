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

  const dummySubjects = [
    {
      name: "computer-science",
      number: 100,
      marksScored: 90
    },
    {
      name: "computer-science",
      number: 100,
      marksScored: 90
    },
    {
      name: "computer-science",
      number: 100,
      marksScored: 90
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
                <TableCell align="center">Classes attended</TableCell>
                <TableCell align="center">Marks scored</TableCell>
                <TableCell align="center">ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummySubjects?.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.number}</TableCell>
                  <TableCell align="center">{row.marksScored}</TableCell>
                  <TableCell align="center">
                    <Button>
                      Edit
                    </Button>
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
