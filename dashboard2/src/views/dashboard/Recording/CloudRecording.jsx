import React, { useState } from "react";
import { useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  Tooltip,
  IconButton,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  Box,
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import DownloadIcon from "@material-ui/icons/Download";
import ShareIcon from "@material-ui/icons/Share";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { API_SERVICE } from "config";
import axios from "axios";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";
const CloudRecording = () => {
  const [open, setOpen] = React.useState(false);
  const [recordings, setRecordings] = React.useState([]);
  const [openShare, setOpenShare] = React.useState(false);
  const [selectedRecording, setSelectedRecording] = React.useState(null);
  const [shareWithEmail, setShareWithEmail] = React.useState("");
  const [alert, setAlert] = useState({ error: false, message: "" });
  const userEmail = getSessionStorageOrDefault("userEmail", "");
  const [loading, setLoading] = useState(true);
  const [openSnack, setOpenSnack] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseShare = () => {
    setSelectedRecording(null);
    setOpenShare(false);
  };
  const handleShare = async () => {
    if (shareWithEmail === "" || selectedRecording === null) {
      setAlert({ error: true, message: "Something went wrong" });
      setSelectedRecording(null);
      setOpenShare(false);
      setOpenSnack(true);
    }
    await axios.post(`${API_SERVICE}/recordings/shared`, {
      shareEmail: shareWithEmail,
      recording: selectedRecording,
    });
    setOpenShare(false);
    setAlert({
      error: false,
      message: `Shared With ${shareWithEmail.split("@")[0]}`,
    });
    setShareWithEmail("");
    setSelectedRecording(null);
    setOpenSnack(true);
  };

  useEffect(() => {
    const get = () => {
      axios
        .get(`${API_SERVICE}/listvideos/`)
        .then((res) => {
          setLoading(false);
          setRecordings(res.data);
        })
        .catch((err) => console.log(err));
    };
    get();
  }, []);
  return (
    <>
      <Dialog fullWidth open={openShare} onClose={handleCloseShare}>
        <DialogTitle>Share</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={shareWithEmail}
            onChange={(e) => setShareWithEmail(e.target.value)}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseShare}>Cancel</Button>
          <Button onClick={handleShare}>Share</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reservation</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            fullWidth
            label="Table Number"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Container>
        <TableContainer sx={{ mt: 4 }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Slno</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recordings.map((recording, id) => {
                return (
                  <TableRow key={id + 1}>
                    <TableCell component="th" scope="row">
                      {id + 1}
                    </TableCell>
                    <TableCell align="center">
                      {new Date().toDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Download">
                        <IconButton
                          color="primary"
                          href={recording.videoUrl}
                          target="_blank"
                        >
                          <DownloadIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton
                          onClick={() => {
                            setSelectedRecording(recording);
                            setOpenShare(true);
                          }}
                          color="secondary"
                          target="_blank"
                        >
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {loading ? <CircularProgress /> : null}
        </Box>
      </Container>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={() => setOpenSnack(false)}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity={alert.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CloudRecording;
