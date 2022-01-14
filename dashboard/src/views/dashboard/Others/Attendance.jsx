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
import axios from "axios";
import { API_SERVICE } from "../../../config";

const Attendance = () => {
  const [attendance, setAttendance] = React.useState([]);

  const getAttendance = () => {
    console.log(`${API_SERVICE}/attendance`);
    axios
      .get(`${API_SERVICE}/attendance`)
      .then((res) => setAttendance(res.data.attendes))
      .catch((err) => console.error(err));
  };
  React.useEffect(() => {
    getAttendance();
  }, []);
  console.log(attendance);

  const getDate = (time) => {
    var d = new Date(time);
    var formattedDate = "";
    formattedDate +=
      d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
    return formattedDate;
  };

  const getTime = (time) => {
    if (!time) return "";
    var d = new Date(time);
    var formattedTime = "";
    formattedTime = d.getHours() + ":" + d.getMinutes();
    return formattedTime;
  };

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }
  const getTimeDifference = (clockIn, clockOut) => {
    if (!clockOut) return "";
    var entry = new Date(clockIn).getTime();
    var exit = new Date(clockOut).getTime();
    var difference = exit - entry;
    return msToTime(difference);
  };

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

            <TableCell align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendance.map((attende) => (
            <TableRow>
              <TableCell scope="row" align="center">
                {getDate(attende.clockInTime)}
              </TableCell>
              <TableCell align="center">{attende.userId}</TableCell>
              <TableCell align="center">
                {getTime(attende.clockInTime)}
              </TableCell>
              <TableCell align="center">
                {getTime(attende.clockOutTime)}
              </TableCell>
              <TableCell align="center">
                {getTimeDifference(attende.clockInTime, attende.clockOutTime)}
              </TableCell>
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Attendance;
