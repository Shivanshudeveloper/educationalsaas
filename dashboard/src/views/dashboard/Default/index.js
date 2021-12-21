import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// material-ui
import { Grid } from "@material-ui/core";
// project imports

import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";

import { API_SERVICE } from "../../../config";
import axios from "axios";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";
// ===========================|| DEFAULT DASHBOARD ||=========================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const userEmail = getSessionStorageOrDefault("userEmail", "");
  const [appts, setAppts] = useState([]);
  const getAppts = async () => {
    await axios
      .get(`${API_SERVICE}/getappt/${userEmail}`)
      .then((res) => {
        let sample = [];
        res.data.map((data) =>
          sample.push({ title: data.note, date: data.apptDate.split("T")[0] })
        );
        setAppts(sample);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAppts();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={appts}
          />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
