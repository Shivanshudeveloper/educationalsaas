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
                                <TableCell>Notes</TableCell>
                                <TableCell align="right">Created on</TableCell>
                                <TableCell align="center">ACTIONS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default List;
