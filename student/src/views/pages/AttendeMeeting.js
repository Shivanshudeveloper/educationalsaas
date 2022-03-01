import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { date } from "yup";
import axios from "axios";

import { API_SERVICE } from "../../config";

const AttendeMeeting = () => {
  const [date, setdate] = React.useState({});
  const [userId, setUserId] = React.useState("");

  const getDayInString = (day) => {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "";
        break;
    }
  };
  const getDate = () => {
    var formattedDate = "";
    var formattedTime = "";
    var d = new Date();
    formattedDate +=
      d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
    formattedTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var day = getDayInString(d.getDay());
    setdate({ formattedDate, formattedTime, day });
  };

  React.useEffect(() => {
    getDate();
  }, []);

  const clockIn = () => {
    axios
      .post(`${API_SERVICE}/attendance/clock-in`, { id: userId })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };
  const clockOut = () => {
    axios
      .patch(`${API_SERVICE}/attendance/clock-out`, { id: userId })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{
        backgroundColor: "#99d3f7",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: "3rem",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bolder" }}>{date.day}</h1>
        <p style={{ fontSize: "1.5rem" }}>
          <span>{date.formattedDate}</span> | <span>{date.formattedTime}</span>
        </p>
        <p
          style={{
            marginTop: "1rem",
          }}
        >
          Enter Your ID Number
        </p>
        <TextField
          color="secondary"
          sx={{ width: "100%" }}
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          required
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: ".5rem",
          }}
        >
          <div>
            <Button
              variant="contained"
              sx={{ marginRight: "4rem" }}
              onClick={clockIn}
              disabled={userId.length === 0}
            >
              CLOCK IN
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{ backgroundColor: "green" }}
              onClick={clockOut}
              disabled={userId.length === 0}
            >
              CLOCK OUT
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default AttendeMeeting;
