import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// material-ui
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  FormControl,
  Select,
  MenuItem,
  Button,
  DialogActions,
} from '@material-ui/core';
// project imports

import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { storage } from '../../../Firebase/index';
import { API_SERVICE } from '../../../config';
import axios from 'axios';
import { getSessionStorageOrDefault } from 'utils/getSessionStorageOrDefault';
// ===========================|| DEFAULT DASHBOARD ||=========================== //
import fileDownload from 'js-file-download';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const userEmail = getSessionStorageOrDefault('userEmail', '');
  const [appts, setAppts] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [events, setEvents] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const getAppts = async () => {
    await axios
      .get(`${API_SERVICE}/getevents/${userEmail}`)
      .then((res) => {
        let sample = [];
        res.data.map((data, id) =>
          sample.push({ title: data.title, date: data.startDate, id: id })
        );
        console.log(res.data);
        setEvents(res.data);
        setAppts(sample);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAppts();
  }, []);

  const downloadFile = (title) => {
    axios
      .get(`${API_SERVICE}/getVideoUrl/${title}`)
      .then((res) => {
        fetch(res.data.data.url)
          .then((resp) => resp.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = title;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            // alert('your file has downloaded!'); // or you know, something with better UX...
          })
          .catch(() => alert('oh no!'));
        // setDownloadUrl(res.data.data.url);
        // window.open(res.data.data.url, '_blank');
        // axios
        //   .get(res.data.data.url, {
        //     responseType: 'blob',
        //   })
        //   .then((res) => {
        //     fileDownload(res.data, title);
        //   });
        // console.log(res.data.data.url);
        return res.data.data.url;
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  };
  // console.log(selected);
  return (
    <>
      <Dialog
        open={show}
        fullWidth
        maxWidth='sm'
        onClose={() => {
          setShow(false);
          setSelected(null);
        }}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            value={selected?.title}
            fullWidth
            label='Title'
            disabled
            sx={{ mb: 2 }}
            type='text'
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                mr: 2,
              }}
            >
              <TextField
                disabled
                autoFocus
                margin='dense'
                id='name'
                value={new Date(selected?.startDate).toLocaleDateString()}
                sx={{ mb: 2, width: '60%' }}
                type='text'
              />
              <TextField
                disabled
                autoFocus
                margin='dense'
                id='name'
                value={selected?.startTime}
                sx={{ mb: 2, width: '60%' }}
                type='text'
              />
            </Box>
            <h3>to</h3>
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                ml: 2,
              }}
            >
              <TextField
                disabled
                autoFocus
                margin='dense'
                id='name'
                value={new Date(selected?.endDate).toLocaleDateString()}
                sx={{ mb: 2, width: '60%' }}
                type='text'
              />
              <TextField
                disabled
                autoFocus
                margin='dense'
                id='name'
                value={selected?.endTime}
                sx={{ mb: 2, width: '60%' }}
                type='text'
              />
            </Box>
          </Box>
          <FormControl disabled variant='filled' sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={selected?.recurrenceType}
            >
              <MenuItem value={"Doesn't repeat"}>Doesn't repeat</MenuItem>
              <MenuItem value={'Custom'}>Custom</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            variant='contained'
            sx={{ width: '100%' }}
            onClick={() => downloadFile(selected?.title)}
            // onClick={() => }
          >
            Download
          </Button>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={selected?.email}
            disabled
            label='Email'
            sx={{ mb: 2 }}
            type='text'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={selected?.Attende}
            label='Attende'
            disabled
            sx={{ mb: 2 }}
            type='text'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={selected?.hostUrl}
            label='Host URL:'
            disabled
            sx={{ mb: 2 }}
            type='text'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={selected?.description}
            disabled
            label='Description'
            multiline
            rows={4}
            sx={{ mb: 2 }}
            type='text'
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShow(false);
              setSelected(null);
            }}
            color='primary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView='dayGridMonth'
              eventClick={({ event }) => {
                setSelected(events[event.id]);
                setShow(true);
              }}
              events={appts}
            />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
