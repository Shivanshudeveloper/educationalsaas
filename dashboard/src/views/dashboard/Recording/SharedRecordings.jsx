import React from 'react';
import { useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Tooltip, IconButton, Button } from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import DownloadIcon from '@material-ui/icons/Download';
import ShareIcon from '@material-ui/icons/Share';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { API_SERVICE } from 'config';
import axios from "axios";
import { getSessionStorageOrDefault } from 'utils/getSessionStorageOrDefault';
const SharedRecordings = () => {


    const [open, setOpen] = React.useState(false);
    const [recordings,setRecordings]=React.useState([]);
const userEmail=getSessionStorageOrDefault("userEmail","");
    const handleClose = () => {
        setOpen(false);
    };
  
    useEffect(()=>{
      const get=()=>{
         axios
        .get(`${API_SERVICE}/recordings/shared/${userEmail}`)
        .then((res) => {
            setRecordings(res.data);
        })
        .catch((err) => console.log(err));
      }
      get();
    },[])
    return (
        <>
        
        <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
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
                        {recordings.map((recording,id)=>{
                            return (
                                <TableRow key={id+1}>
                                <TableCell component="th" scope="row">
                                    {id+1}
                                </TableCell>
                                <TableCell align="center">{(new Date()).toDateString()}</TableCell>
                                <TableCell align='center'>
        
                                    <Tooltip title='Download'>
                                        <IconButton
                                            color='primary'
                                            href={recording.videoUrl}
                                            target="_blank"
                                        >
                                            <DownloadIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                                </TableRow>
                            )
                        })}
                       
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
        </>
    )
}

export default SharedRecordings
