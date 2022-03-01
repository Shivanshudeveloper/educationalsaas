import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

// redux import
import { useDispatch, useSelector } from "react-redux";
import { SET_THEME_MODE } from "store/actions";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

// material-ui
import { makeStyles, useTheme } from "@material-ui/styles";
import { Avatar, Box, ButtonBase, Button, IconButton } from "@material-ui/core";
import { Brightness4, Brightness7, VideoCall } from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// project imports
import LogoSection from "../LogoSection";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";
// assets
import { IconMenu2 } from "@tabler/icons";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";
import { API_SERVICE } from "config";



const meetingURL = [
  {
    Attende:
      'https://videoconference.evanalin.com/ee544e87-5a8d-4f2b-9233-d685ce02a9b7',
    hostURL:
      'https://videoconference.evanalin.com/78d1d610-052a-435e-8eba-a149ca073f7e',
  },
  {
    Attende:
      'https://videoconference.evanalin.com/0f90d96e-810b-455e-a3e0-778b110f0702',
    hostURL:
      'https://videoconference.evanalin.com/b5385407-c67b-45de-8099-868ca1a1fa43',
  },
  {
    Attende:
      'https://videoconference.evanalin.com/c0593bc8-905c-40a1-ac0d-b046dc15c4bb',
    hostURL:
      'https://videoconference.evanalin.com/bcb4d68b-ba57-4a67-8ca4-c93667b5c5da',
  },
  {
    Attende:
      'https://videoconference.evanalin.com/884afcfe-4766-4968-bdb1-b1af7c702bdc',
    hostURL:
      'https://videoconference.evanalin.com/5332e8a5-4676-4aef-932e-2febd67faf39',
  },

  {
    Attende:
      'https://videoconference.evanalin.com/df07544e-f667-40be-b18f-c5e5833fec14',
    hostURL:
      'https://videoconference.evanalin.com/f8542243-6a6d-4683-b66a-7f1b36638322',
  },

  {
    Attende:
      'https://videoconference.evanalin.com/3886e3d5-665d-4708-8c1c-8b6aad9896f5',
    hostURL:
      'https://videoconference.evanalin.com/bcd4e71d-5509-4f5d-ab7a-50f20e5701a4',
  },

  {
    Attende:
      'https://videoconference.evanalin.com/e7c7e192-3a0f-4dca-81f2-2befbc8d5d8c',
    hostURL:
      'https://videoconference.evanalin.com/35513acf-4f8f-45b6-a858-d7023644b4f2',
  },

  {
    Attende:
      'https://videoconference.evanalin.com/799cf594-0f82-4550-a842-090f048408ae',
    hostURL:
      'https://videoconference.evanalin.com/bdfa9e2e-0477-40f0-9b49-1d7137a55677',
  },
];


// style constant
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  headerAvatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    transition: "all .2s ease-in-out",
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
    "&:hover": {
      background: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
    },
  },
  boxContainer: {
    width: "228px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}));

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {

  const [open, setOpen] = React.useState(false);
  const [meetlink, setmeetlink] = React.useState({
    Attende: '',
    hostURL: ''
  });


  const handleClickOpen = () => {
    const random = Math.floor(Math.random() * meetingURL.length);

    console.log(meetingURL[random].Attende);

    setmeetlink({
      Attende: meetingURL[random].Attende,
      hostURL: meetingURL[random].hostURL
    })

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const userid = getSessionStorageOrDefault("userId", "");
  const colorMode = localStorage.getItem("colorMode")
    ? JSON.parse(localStorage.getItem("colorMode"))
    : theme.palette.mode;

  const [mode, setMode] = useState(colorMode);
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const changeTheme = async () => {
      try {
        dispatch({ type: SET_THEME_MODE, mode });
        localStorage.setItem("colorMode", JSON.stringify(mode));
      } catch (error) {
        console.log(error);
      }
    };

    changeTheme();
  }, [dispatch, mode]);
  useEffect(() => {
    fetch(`${API_SERVICE}/getuser/${userid}`)
      .then((res) => res.json())
      .then((res) => {
        // setLogo(res[0].logo);
      })
      .catch((err) => console.log(err));
  }, [userid]);
  return (
    <>
      <Dialog
        open={open}
        fullWidth
        maxWidth='md'
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Meet
        </DialogTitle>
        <DialogContent>
          <center>
            <img alt='Logo' style={{ width: '100px' }} src='https://res.cloudinary.com/dx9dnqzaj/image/upload/v1645080275/education/image_5_sojsbd.png' />
          </center>

          <h2>Host URL</h2>
          <TextField value={meetlink.hostURL} sx={{ mb: 2 }} fullWidth disabled label='' />


          <h2>Attende URL</h2>
          <TextField value={meetlink.Attende} sx={{ mb: 2 }} fullWidth disabled label='' />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>


      {/* logo & toggler button */}
      <div className={classes.boxContainer}>
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            height="50px"
            width="50px"
          />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            className={classes.headerAvatar}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </div>

      {/* header search */}
      <SearchSection theme="light" />
      <div className={classes.grow} />
      <div className={classes.grow} />

      {/* toggle between light and dark mode */}
      <IconButton sx={{ mr: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      {/* notification & profile */}
      {/* <Button variant="outlined">Upgrade Plan</Button>
      <Button style={{ marginLeft: "20px" }} variant="contained">
        Invite People
      </Button> */}

      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
