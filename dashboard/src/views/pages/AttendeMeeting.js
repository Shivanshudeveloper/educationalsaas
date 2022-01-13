import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

const AttendeMeeting = () => {
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
        Mon, January 13, 2022
        <h1>04:05:26 PM</h1>
        <p
          style={{
            marginTop: "1rem",
          }}
        >
          Enter Your ID Number
        </p>
        <TextField color="secondary" sx={{ width: "100%" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: ".5rem",
          }}
        >
          <div>
            <Button variant="contained" sx={{ marginRight: "4rem" }}>
              CLOCK IN
            </Button>
          </div>
          <div>
            <Button variant="contained">CLOCK OUT</Button>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default AttendeMeeting;
