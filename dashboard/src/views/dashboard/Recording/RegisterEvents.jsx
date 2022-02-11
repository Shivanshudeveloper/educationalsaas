import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
  Tooltip,
  IconButton,
  Button,
  Box,
  DialogContentText,
  Typography,
  Input,
} from '@material-ui/core';
import axios from 'axios';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { API_SERVICE } from 'config';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@material-ui/styles';
import { storage } from '../../../Firebase/index';
function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }

  return stored;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 200,
  },
}));

const timeArray = [
  '12:00am',
  '12:15am',
  '12:30am',
  '12:45am',
  '1:00am',
  '1:15am',
  '1:30am',
  '1:45am',
  '2:00am',
  '2:15am',
  '2:30am',
  '2:45am',
  '3:00am',
  '3:15am',
  '3:30am',
  '3:45am',
  '4:00am',
  '4:15am',
  '4:30am',
  '4:45am',
  '5:00am',
  '5:15am',
  '5:30am',
  '5:45am',
  '6:00am',
  '6:15am',
  '6:30am',
  '6:45am',
  '7:00am',
  '7:15am',
  '7:30am',
  '7:45am',
  '8:00am',
  '8:15am',
  '8:30am',
  '8:45am',
  '9:00am',
  '9:15am',
  '9:30am',
  '9:45am',
  '10:00am',
  '10:15am',
  '10:30am',
  '10:45am',
  '11:00am',
  '11:15am',
  '11:30am',
  '11:45am',
  '12:00pm',
  '12:15pm',
  '12:30pm',
  '12:45pm',
  '1:00pm',
  '1:15pm',
  '1:30pm',
  '1:45pm',
  '2:00pm',
  '2:15pm',
  '2:30pm',
  '2:45pm',
  '3:00pm',
  '3:15pm',
  '3:30pm',
  '3:45pm',
  '4:00pm',
  '4:15pm',
  '4:30pm',
  '4:45pm',
  '5:00pm',
  '5:15pm',
  '5:30pm',
  '5:45pm',
  '6:00pm',
  '6:15pm',
  '6:30pm',
  '6:45pm',
  '7:00pm',
  '7:15pm',
  '7:30pm',
  '7:45pm',
  '8:00pm',
  '8:15pm',
  '8:30pm',
  '8:45pm',
  '9:00pm',
  '9:15pm',
  '9:30pm',
  '9:45pm',
  '10:00pm',
  '10:15pm',
  '10:30pm',
  '10:45pm',
  '11:00pm',
  '11:15pm',
  '11:30pm',
  '11:45pm',
];
const meetingURL = [
  {
    Attende:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/ee544e87-5a8d-4f2b-9233-d685ce02a9b7',
    hostURL:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/78d1d610-052a-435e-8eba-a149ca073f7e',
  },
  {
    Attende:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/0f90d96e-810b-455e-a3e0-778b110f0702',
    hostURL:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/b5385407-c67b-45de-8099-868ca1a1fa43',
  },
  {
    Attende:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/c0593bc8-905c-40a1-ac0d-b046dc15c4bb',
    hostURL:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/bcb4d68b-ba57-4a67-8ca4-c93667b5c5da',
  },
  {
    Attende:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/884afcfe-4766-4968-bdb1-b1af7c702bdc',
    hostURL:
      'https://ckywz2mux139026qojn3l9np1j5-fue8ppzuo-hariom-ojha23.vercel.app/5332e8a5-4676-4aef-932e-2febd67faf39',
  },
];
const items = ['days', 'weeks', 'years', 'months'];
const RegisterEvents = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [Todelete, setToDelete] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [eventEdit, setEventEdit] = useState({
    title: '',
    startDate: null,
    endDate: null,
    startTime: '00:00am',
    endTime: '00:00am',
    email: '',
    description: '',
    recurrenceType: "Doesn't repeat",
    recurrenceValue: {},
  });
  const [custom, setCustom] = useState({
    repeatEvery: {
      count: 0,
      type: 'days',
    },
    repeatOn: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },
    ends: {
      type: 'Never',
      value: 0,
    },
  });
  const [openCustom, setOpenCustom] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [event, setEvent] = useState({
    title: '',
    startDate: new Date(),
    endDate: null,
    startTime: '00:00am',
    endTime: '00:00am',
    email: '',
    description: '',
    recurrenceType: "Doesn't repeat",
    recurrenceValue: {},
    Attende: '',
    hostUrl: '',
  });
  const [options, setOptions] = React.useState(timeArray);
  const [onDate, setOnDate] = useState('');
  const [occur, setOccur] = useState(0);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const userEmail = getSessionStorageOrDefault('userEmail', '');
  const userName = getSessionStorageOrDefault('userName', '');
  const [events, setEvents] = useState([]);
  const [openEditCustom, setOpenEditCustom] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [videoURL, setvideoURL] = useState(null);

  const [customEdit, setCustomEdit] = useState({
    repeatEvery: {
      count: 0,
      type: 'days',
    },
    repeatOn: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },
    ends: {
      type: 'Never',
      value: 0,
    },
  });
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // // On file upload (click the upload button)
  // const onFileUpload = async (title) => {
  //   // Create an object of formData
  //   // if (selectedFile == null) return;
  //   // const uuid = uuidv4();
  //   // var storageRef = storage.ref(title);
  //   // console.log(storageRef);
  //   // storageRef.put(selectedFile).then((snapshot) => {
  //   //   console.log(snapshot);
  //   // });
  //   // var video;
  //   // async () => {
  //   // var uniquetwoKey = uuidv4();
  //   // const filePath = await storageRef.getDownloadURL();
  //   // video = {
  //   //   uuid: uuid,
  //   //   title: title,
  //   //   url: filePath,
  //   //   date: new Date(),
  //   //   // };
  //   // };
  //   // axios
  //   //   .post(`${API_SERVICE}/setVideoUrl`, video)
  //   //   .then((res) => console.log('File uploaded'))
  //   //   .catch((err) => console.error(err));
  // };

  const handleClickOpen = () => {
    setRandomNumber(Math.floor(Math.random() * 4));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEvent({
      title: '',
      startDate: null,
      endDate: null,
      startTime: '00:00am',
      endTime: '00:00am',
      email: '',
      description: '',
      recurrenceType: "Doesn't repeat",
      recurrenceValue: {},
      Attende: '',
      hostUrl: '',
    });
  };
  const submit = async () => {
    console.log(event);
    const uuid = uuidv4();
    var filePath = null;
    var storageRef = storage.ref(uuid + event.title);
    if (selectedFile !== null) {
      // var storageRef = storage.ref(uuid + event.title);
      console.log(storageRef);
      storageRef.put(selectedFile).then(async (snapshot) => {
        console.log(snapshot);
        var video;
        filePath = await storageRef.getDownloadURL();
        setvideoURL(filePath);
        video = {
          uuid: uuid,
          title: event.title,
          url: filePath,
          date: new Date(),
          // };
        };

        axios
          .post(`${API_SERVICE}/setVideoUrl`, video)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      });
    }
    console.log('Adding Event');
    axios.post(`${API_SERVICE}/addevent`, {
      event: {
        ...event,
        recurrenceValue: custom,
        downloadUrl: filePath,
        Attende: meetingURL[randomNumber].Attende,
        hostUrl: meetingURL[randomNumber].hostURL,
      },
      userEmail,
      userName,
    });
    setOpen(false);
    setSelectedFile(null);
    setEvent({
      title: '',
      startDate: null,
      endDate: null,
      startTime: '00:00am',
      endTime: '00:00am',
      email: '',
      description: '',
      recurrenceType: "Doesn't repeat",
      recurrenceValue: {},
      Attende: '',
      hostUrl: '',
    });
    setvideoURL(null);
    setEvents((old) => [
      ...old,
      {
        ...event,
        Attende: meetingURL[randomNumber].Attende,
        hostUrl: meetingURL[randomNumber].hostURL,
      },
    ]);
  };
  const handleEditSubmit = async () => {
    setOpenEditCustom(false);

    setOpenEdit(false);
    if (selectedFile !== null) {
      const uuid = uuidv4();
      var storageRef = storage.ref(uuid + event.title);
      console.log(storageRef);
      storageRef.put(selectedFile).then(async (snapshot) => {
        console.log(snapshot);
        var video;
        const filePath = await storageRef.getDownloadURL();
        setvideoURL(filePath);
        video = {
          uuid: uuid,
          title: event.title,
          url: filePath,
          date: new Date(),
          // };
        };

        await axios
          .post(`${API_SERVICE}/setVideoUrl`, video)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      });
    }
    await axios.patch(`${API_SERVICE}/updateevent`, {
      event: { ...eventEdit, recurrenceValue: customEdit },
    });
    let EEvents = [...events];
    let index = EEvents.findIndex((ele) => ele._id === eventEdit._id);
    EEvents[index] = {
      ...eventEdit,
      recurrenceValue: customEdit,
      downloadUrl: videoURL,
    };
    setEvents(EEvents);
    // setSelectedFile(null);
    setEventEdit({
      title: '',
      startDate: null,
      endDate: null,
      startTime: '00:00am',
      endTime: '00:00am',
      email: '',
      description: '',
      recurrenceType: "Doesn't repeat",
      recurrenceValue: {},
    });
    setvideoURL(null);
  };
  useEffect(() => {
    const getEvent = async () => {
      const res = await axios.get(`${API_SERVICE}/getevents/${userEmail}`);
      setEvents(res.data);
      console.log(res.data);
    };
    getEvent();
  }, []);
  const handleCloseCustom = () => {
    setOpenCustom(false);
  };
  useEffect(() => {
    if (event.recurrenceType === 'Custom') {
      setOpenCustom(true);
    }
  }, [event.recurrenceType]);
  useEffect(() => {
    if (eventEdit?.recurrenceType === 'Custom') {
      setCustomEdit(eventEdit?.recurrenceValue);
    }
  }, [eventEdit?.recurrenceType]);
  const handleDelete = async (e) => {
    let Events = [...events];
    const res = await axios.delete(`${API_SERVICE}/deleteevent/${e._id}`);
    Events = Events.filter((ele) => ele._id !== e._id);
    setEvents(Events);
    console.log(res.data);
  };

  const handleSetDay = (i) => {
    if (i === 0) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, sun: !custom.repeatOn.sun },
      });
    } else if (i === 1) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, mon: !custom.repeatOn.mon },
      });
    } else if (i === 2) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, tue: !custom.repeatOn.tue },
      });
    } else if (i === 3) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, wed: !custom.repeatOn.wed },
      });
    } else if (i === 4) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, thu: !custom.repeatOn.thu },
      });
    } else if (i === 5) {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, fri: !custom.repeatOn.fri },
      });
    } else {
      setCustom({
        ...custom,
        repeatOn: { ...custom.repeatOn, sat: !custom.repeatOn.sat },
      });
    }
  };
  const handleSetDayEdit = (i) => {
    if (i === 0) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, sun: !customEdit?.repeatOn.sun },
      });
    } else if (i === 1) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, mon: !customEdit?.repeatOn.mon },
      });
    } else if (i === 2) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, tue: !customEdit?.repeatOn.tue },
      });
    } else if (i === 3) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, wed: !customEdit?.repeatOn.wed },
      });
    } else if (i === 4) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, thu: !customEdit?.repeatOn.thu },
      });
    } else if (i === 5) {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, fri: !customEdit?.repeatOn.fri },
      });
    } else {
      setCustomEdit({
        ...customEdit,
        repeatOn: { ...customEdit?.repeatOn, sat: !customEdit?.repeatOn.sat },
      });
    }
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleCloseEditCustom = () => {
    setCustomEdit(eventEdit.recurrenceValue);
    setOpenEditCustom(false);
  };
  return (
    <>
      <Dialog
        open={openEditCustom}
        maxWidth='sm'
        onClose={handleCloseEditCustom}
        aria-labelledby='responsive-dialog-title'
      >
        <Typography variant='h3' sx={{ m: 2, fontWeight: 300 }}>
          Edit Custom recurrence
        </Typography>

        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography variant='h4' sx={{ fontWeight: 100, mr: 10 }}>
              Repeat Every
            </Typography>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              value={customEdit?.repeatEvery?.count}
              variant='outlined'
              sx={{ borderRadius: '20px' }}
              onChange={(e) =>
                setCustomEdit({
                  ...customEdit,
                  repeatEvery: {
                    count: e.target.value,
                    type: customEdit?.repeatEvery.type,
                  },
                })
              }
              type='number'
            />
            <FormControl variant='outlined' sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={customEdit?.repeatEvery.type}
                onChange={(e) =>
                  setCustomEdit({
                    ...customEdit,
                    repeatEvery: {
                      count: customEdit?.repeatEvery.count,
                      type: e.target.value,
                    },
                  })
                }
              >
                {items.map((val) => (
                  <MenuItem value={val}>{val}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant='h4'
              sx={{ m: 3, fontWeight: 100, mr: 1, ml: 0, float: 'left' }}
            >
              Repeat On
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 3,
                ml: 10,
              }}
            >
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((ele, id) => {
                return (
                  <div
                    style={
                      !Object.entries(customEdit?.repeatOn)[id][1]
                        ? {
                            border: '1px solid white',
                            borderRadius: '20px',
                            textAlign: 'center',
                            display: 'flex',
                            cursor: 'pointer',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#f0f8ff',
                            marginLeft: '10px',
                            fontWeight: '600',
                            height: '30px',
                            width: '30px',
                          }
                        : {
                            border: '1px solid white',
                            borderRadius: '20px',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#1e90ff',
                            color: 'white',
                            fontWeight: '800',
                            marginLeft: '10px',
                            cursor: 'pointer',
                            height: '30px',
                            width: '30px',
                          }
                    }
                    key={id}
                    onClick={() => {
                      handleSetDayEdit(id);
                    }}
                  >
                    {ele}
                  </div>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant='h4'
              sx={{ m: 3, fontWeight: 100, mr: 1, ml: 0, float: 'left' }}
            >
              Ends
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 3,
                ml: 10,
              }}
            >
              <FormControl component='fieldset'>
                <RadioGroup
                  aria-label='gender'
                  defaultValue={customEdit?.ends.type}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    onClick={() =>
                      setCustomEdit({
                        ...customEdit,
                        ends: {
                          type: 'Never',
                          value: null,
                        },
                      })
                    }
                    value='Never'
                    control={<Radio />}
                    label='Never'
                  />
                  <FormControlLabel
                    onClick={() =>
                      setCustomEdit({
                        ...customEdit,
                        ends: {
                          type: 'On',
                          value: null,
                        },
                      })
                    }
                    value='On'
                    control={<Radio />}
                    label='On'
                  />
                  {customEdit?.ends.type === 'On' ? (
                    <TextField
                      autoFocus
                      margin='dense'
                      id='name'
                      value={onDate === '' ? customEdit?.ends.value : onDate}
                      onChange={(e) => setOnDate(e.target.value)}
                      sx={{ mb: 2, width: '100%' }}
                      type='date'
                    />
                  ) : null}
                  <FormControlLabel
                    onClick={() =>
                      setCustomEdit({
                        ...customEdit,
                        ends: {
                          type: 'After',
                          value: null,
                        },
                      })
                    }
                    value='After'
                    control={<Radio />}
                    label='After'
                  />

                  {customEdit?.ends.type === 'After' ? (
                    <TextField
                      autoFocus
                      margin='dense'
                      id='name'
                      variant='outlined'
                      label='occurrences'
                      value={occur === 0 ? customEdit?.ends.value : occur}
                      onChange={(e) => setOccur(e.target.value)}
                      sx={{ mb: 2, width: '100%' }}
                      type='number'
                    />
                  ) : null}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: 'gray' }}
            autoFocus
            onClick={() => {
              handleCloseEditCustom();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (customEdit?.ends.type === 'On') {
                setCustomEdit({
                  ...customEdit,
                  ends: {
                    type: customEdit?.ends.type,
                    value: onDate,
                  },
                });
              }
              if (customEdit?.ends.type === 'After') {
                setCustomEdit({
                  ...customEdit,
                  ends: {
                    type: customEdit?.ends.type,
                    value: occur,
                  },
                });
              }
              setOpenEditCustom(false);
            }}
            autoFocus
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEdit}
        maxWidth='md'
        fullWidth
        onClose={handleCloseEdit}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Edit Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            value={eventEdit.title}
            fullWidth
            onChange={(e) =>
              setEventEdit({ ...eventEdit, title: e.target.value })
            }
            label='Title'
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
                autoFocus
                margin='dense'
                id='name'
                value={eventEdit.startDate}
                onChange={(e) => {
                  setEventEdit({ ...eventEdit, startDate: e.target.value });
                }}
                sx={{ mb: 2, width: '60%' }}
                type='date'
              />
              <Autocomplete
                options={options}
                getOptionLabel={(option) => option}
                onInputChange={(e, newValue) => {
                  setEventEdit({ ...eventEdit, startTime: newValue });
                }}
                value={eventEdit.startTime}
                sx={{ width: '35%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id='standard-basic'
                    variant='standard'
                    onKeyDown={(e) => {
                      if (
                        e.key === 'Enter' &&
                        timeArray.findIndex(
                          (o) => o.title === eventEdit.startTime
                        ) === -1
                      ) {
                        setOptions((o) => o.concat(eventEdit.startTime));
                      }
                    }}
                  />
                )}
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
                autoFocus
                margin='dense'
                id='name'
                value={eventEdit.endDate}
                onChange={(e) => {
                  console.log(eventEdit);
                  setEventEdit({ ...eventEdit, endDate: e.target.value });
                }}
                sx={{ mb: 2, width: '60%' }}
                type='date'
              />
              <Autocomplete
                options={options}
                sx={{ width: '35%' }}
                getOptionLabel={(option) => option}
                onInputChange={(e, newValue) => {
                  setEventEdit({ ...eventEdit, endTime: newValue });
                }}
                value={eventEdit.endTime}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id='standard-basic'
                    variant='standard'
                    onKeyDown={(e) => {
                      if (
                        e.key === 'Enter' &&
                        timeArray.findIndex(
                          (o) => o.title === eventEdit.endTime
                        ) === -1
                      ) {
                        setOptions((o) => o.concat(eventEdit.endTime));
                      }
                    }}
                  />
                )}
              />
            </Box>
          </Box>
          <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={eventEdit.recurrenceType}
              onChange={(e) => {
                setEventEdit({ ...eventEdit, recurrenceType: e.target.value });
                if (e.target.value === 'Custom') {
                  setOpenEditCustom(true);
                }
              }}
            >
              <MenuItem value={"Doesn't repeat"}>Doesn't repeat</MenuItem>
              <MenuItem value={'Custom'}>Custom</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={eventEdit.email}
            onChange={(e) =>
              setEventEdit({ ...eventEdit, email: e.target.value })
            }
            label='Email'
            sx={{ mb: 2 }}
            type='text'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={eventEdit.Attende}
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
            value={eventEdit.hostUrl}
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
            value={eventEdit.description}
            onChange={(e) =>
              setEventEdit({ ...eventEdit, description: e.target.value })
            }
            label='Description'
            multiline
            rows={4}
            sx={{ mb: 2 }}
            type='text'
          />
          {selectedFile ? (
            <div>
              <h2>File Details:</h2>
              <p>File Name: {selectedFile.name}</p>
              {/* <button onClick={() => onFileUpload(eventEdit.title)}>
                Upload
              </button> */}
              {/* <p>File Type: {this.state.selectedFile.type}</p> */}
              {/* <p>
                Last Modified:{' '}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p> */}
            </div>
          ) : (
            <label class='file'>
              <input
                type='file'
                id='file'
                aria-label='File upload'
                onChange={onFileChange}
              />

              <span class='file-custom'></span>
            </label>
            // {/* <Input type='file'  /> */}
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openCustom}
        maxWidth='sm'
        onClose={handleCloseCustom}
        aria-labelledby='responsive-dialog-title'
      >
        <Typography variant='h3' sx={{ m: 2, fontWeight: 300 }}>
          Custom recurrence
        </Typography>

        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography variant='h4' sx={{ fontWeight: 100, mr: 10 }}>
              Repeat Every
            </Typography>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              value={custom.repeatEvery.count}
              variant='outlined'
              sx={{ borderRadius: '20px' }}
              onChange={(e) =>
                setCustom({
                  ...custom,
                  repeatEvery: {
                    count: e.target.value,
                    type: custom.repeatEvery.type,
                  },
                })
              }
              type='number'
            />
            <FormControl variant='outlined' sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={custom.repeatEvery.type}
                onChange={(e) =>
                  setCustom({
                    ...custom,
                    repeatEvery: {
                      count: custom.repeatEvery.count,
                      type: e.target.value,
                    },
                  })
                }
              >
                {items.map((val) => (
                  <MenuItem value={val}>{val}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant='h4'
              sx={{ m: 3, fontWeight: 100, mr: 1, ml: 0, float: 'left' }}
            >
              Repeat On
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 3,
                ml: 10,
              }}
            >
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((ele, id) => {
                return (
                  <div
                    style={
                      !Object.entries(custom.repeatOn)[id][1]
                        ? {
                            border: '1px solid white',
                            borderRadius: '20px',
                            textAlign: 'center',
                            display: 'flex',
                            cursor: 'pointer',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#f0f8ff',
                            marginLeft: '10px',
                            fontWeight: '600',
                            height: '30px',
                            width: '30px',
                          }
                        : {
                            border: '1px solid white',
                            borderRadius: '20px',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            backgroundColor: '#1e90ff',
                            color: 'white',
                            fontWeight: '800',
                            marginLeft: '10px',
                            cursor: 'pointer',
                            height: '30px',
                            width: '30px',
                          }
                    }
                    key={id}
                    onClick={() => {
                      handleSetDay(id);
                    }}
                  >
                    {ele}
                  </div>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography
              variant='h4'
              sx={{ m: 3, fontWeight: 100, mr: 1, ml: 0, float: 'left' }}
            >
              Ends
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: 3,
                ml: 10,
              }}
            >
              <FormControl component='fieldset'>
                <RadioGroup
                  aria-label='gender'
                  defaultValue={custom.ends.type}
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    onClick={() =>
                      setCustom({
                        ...custom,
                        ends: {
                          type: 'Never',
                          value: null,
                        },
                      })
                    }
                    value='Never'
                    control={<Radio />}
                    label='Never'
                  />
                  <FormControlLabel
                    onClick={() =>
                      setCustom({
                        ...custom,
                        ends: {
                          type: 'On',
                          value: null,
                        },
                      })
                    }
                    value='On'
                    control={<Radio />}
                    label='On'
                  />
                  {custom.ends.type === 'On' ? (
                    <TextField
                      autoFocus
                      margin='dense'
                      id='name'
                      value={onDate}
                      onChange={(e) => setOnDate(e.target.value)}
                      sx={{ mb: 2, width: '100%' }}
                      type='date'
                    />
                  ) : null}
                  <FormControlLabel
                    onClick={() =>
                      setCustom({
                        ...custom,
                        ends: {
                          type: 'After',
                          value: null,
                        },
                      })
                    }
                    value='After'
                    control={<Radio />}
                    label='After'
                  />

                  {custom.ends.type === 'After' ? (
                    <TextField
                      autoFocus
                      margin='dense'
                      id='name'
                      variant='outlined'
                      label='occurrences'
                      value={occur}
                      onChange={(e) => setOccur(e.target.value)}
                      sx={{ mb: 2, width: '100%' }}
                      type='number'
                    />
                  ) : null}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: 'gray' }}
            autoFocus
            onClick={() => {
              setCustom({});
              setEvent({ ...event, recurrenceType: "Doesn't repeat" });
              handleCloseCustom();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (custom.ends.type === 'On') {
                setCustom({
                  ...custom,
                  ends: {
                    type: custom.ends.type,
                    value: onDate,
                  },
                });
              }
              if (custom.ends.type === 'After') {
                setCustom({
                  ...custom,
                  ends: {
                    type: custom.ends.type,
                    value: occur,
                  },
                });
              }
              setOpenCustom(false);
            }}
            autoFocus
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        maxWidth='md'
        fullWidth
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Create Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            value={event.title}
            fullWidth
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
            label='Title'
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
                autoFocus
                margin='dense'
                id='name'
                value={event.startDate}
                onChange={(e) =>
                  setEvent({ ...event, startDate: e.target.value })
                }
                sx={{ mb: 2, width: '60%' }}
                type='date'
              />
              <Autocomplete
                options={options}
                getOptionLabel={(option) => option}
                onInputChange={(e, newValue) => {
                  setEvent({ ...event, startTime: newValue });
                }}
                sx={{ width: '35%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id='standard-basic'
                    variant='standard'
                    onKeyDown={(e) => {
                      if (
                        e.key === 'Enter' &&
                        timeArray.findIndex(
                          (o) => o.title === event.startTime
                        ) === -1
                      ) {
                        setOptions((o) => o.concat(event.startTime));
                      }
                    }}
                  />
                )}
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
                autoFocus
                margin='dense'
                id='name'
                value={event.endDate}
                onChange={(e) =>
                  setEvent({ ...event, endDate: e.target.value })
                }
                sx={{ mb: 2, width: '60%' }}
                type='date'
              />
              <Autocomplete
                options={options}
                sx={{ width: '35%' }}
                getOptionLabel={(option) => option}
                onInputChange={(e, newValue) => {
                  setEvent({ ...event, endTime: newValue });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id='standard-basic'
                    variant='standard'
                    onKeyDown={(e) => {
                      if (
                        e.key === 'Enter' &&
                        timeArray.findIndex(
                          (o) => o.title === event.endTime
                        ) === -1
                      ) {
                        setOptions((o) => o.concat(event.endTime));
                      }
                    }}
                  />
                )}
              />
            </Box>
          </Box>
          <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={event.recurrenceType}
              onChange={(e) =>
                setEvent({ ...event, recurrenceType: e.target.value })
              }
            >
              <MenuItem value={"Doesn't repeat"}>Doesn't repeat</MenuItem>
              <MenuItem value={'Custom'}>Custom</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={event.email}
            onChange={(e) => setEvent({ ...event, email: e.target.value })}
            label='Email'
            sx={{ mb: 2 }}
            type='text'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            fullWidth
            value={meetingURL[randomNumber].Attende}
            onChange={(e) => setEvent({ ...event, Attende: e.target.value })}
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
            value={meetingURL[randomNumber].hostURL}
            onChange={(e) => setEvent({ ...event, hostUrl: e.target.value })}
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
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
            label='Description'
            multiline
            rows={4}
            sx={{ mb: 2 }}
            type='text'
          />
          {selectedFile ? (
            <div>
              <h2>File Details:</h2>
              <p>File Name: {selectedFile.name}</p>
              {/* <button onClick={onFileUpload}>Upload</button> */}
              {/* <p>File Type: {this.state.selectedFile.type}</p> */}
              {/* <p>
                Last Modified:{' '}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p> */}
            </div>
          ) : (
            <label class='file'>
              <input
                type='file'
                id='file'
                aria-label='File upload'
                onChange={onFileChange}
              />

              <span class='file-custom'></span>
            </label>
            // {/* <Input type='file'  /> */}
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={submit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
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
      <Container>
        <Button
          sx={{ float: 'right', mb: 4 }}
          variant='contained'
          onClick={handleClickOpen}
        >
          Create a new Event
        </Button>
        <TableContainer sx={{ mt: 4 }} component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Slno</TableCell>
                <TableCell align='center'>Event Name</TableCell>
                <TableCell align='center'>Start Date </TableCell>
                <TableCell align='center'>End Date </TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((e, id) => {
                return (
                  <TableRow key={e._id}>
                    <TableCell component='th' scope='row'>
                      {id + 1}
                    </TableCell>
                    <TableCell align='center'>{e.title}</TableCell>
                    <TableCell align='center'>
                      {new Date(e.startDate).toDateString()}
                    </TableCell>
                    <TableCell align='center'>
                      {new Date(e.startDate).toDateString()}
                    </TableCell>
                    <TableCell align='center'>
                      <Tooltip title='Approve'>
                        <IconButton
                          color='primary'
                          onClick={() => {
                            setSelected(e);
                            setShow(true);
                          }}
                          aria-label='upload picture'
                          component='span'
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Edit'>
                        <IconButton
                          color='secondary'
                          onClick={() => {
                            console.log(e);
                            setEventEdit(e);
                            setOpenEdit(true);
                          }}
                          aria-label='upload picture'
                          component='span'
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete'>
                        <IconButton
                          color='secondary'
                          onClick={() => {
                            handleDelete(e);
                          }}
                          aria-label='upload picture'
                          component='span'
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default RegisterEvents;
