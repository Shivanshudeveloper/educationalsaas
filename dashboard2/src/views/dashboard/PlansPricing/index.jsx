import React from "react";
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
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DownloadIcon from "@material-ui/icons/Download";
import ShareIcon from "@material-ui/icons/Share";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import { Elements } from "@stripe/react-stripe-js";
import { API_SERVICE } from "config";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "../Payment";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
const stripePromise = loadStripe(
  "pk_test_51GtK1fKwfxSi9h7QMzgLpxiITbqKmGPddKLaPkgKBmCSpF9cmdTKnesjujYS5UufpTbkfLPePvLGZmrLRkf7qZ2b00EKeBobNM"
);
const styles = {
  card: {
    minWidth: 275,
    minHeight: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
const PansPricing = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const [recordings, setRecordings] = React.useState([]);
  const userEmail = getSessionStorageOrDefault("userEmail", "");
  const [loading, setLoading] = React.useState(true);
  const [showPayment, setShowPayment] = React.useState(false);
  const [item, setItem] = React.useState({ amount: 0, type: "" });
  const [currentPlan, setCurrentPlan] = React.useState([]);
  const [show,setShow]=React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const setShowPaymentHandler = (val) => {
    setShowPayment(false);
    const getCurrentPlan = async () => {
      try {
        const rawRes = await fetch(
          `${API_SERVICE}/getcurrentplan/${userEmail}`
        );
        const res = await rawRes.json();
        setCurrentPlan(res);
        setShow(true);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentPlan();
  };
  useEffect(() => {
    const getCurrentPlan = async () => {
      try {
        const rawRes = await fetch(
          `${API_SERVICE}/getcurrentplan/${userEmail}`
        );
        const res = await rawRes.json();
        setCurrentPlan(res);
  
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentPlan();
  }, []);
 
  if (showPayment) {
    return (
      <Elements stripe={stripePromise}>
        <Payment
          total={item.amount}
          type={item.type}
          show={show}
          setShowPaymentHandler={setShowPaymentHandler}
        />
      </Elements>
    );
  }
  if (loading) {
    return (
      <center>
        <CircularProgress />
      </center>
    );
  }
  if (currentPlan.length !== 0 && show)  {
    return (
      <center>
        <Grid container spacing={0}>
          {currentPlan[0].type === "Professional" ? (
            <Grid item md={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  boxShadow: "0px 0px 5px 1px #C8C8C8",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {currentPlan[0].active === true ? (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#33CC00", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Current Plan
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#800000 ", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Plan Expired
                          </Typography>
                        </Box>
                      )}

                      <Container>
                        <Typography variant="h2">Professional</Typography>
                      </Container>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Typography variant="h5">$</Typography>
                      <Typography variant="h1">19</Typography>
                      <Typography
                        sx={{ alignSelf: "end" }}
                        variant="headline"
                        component="h5"
                      >
                        /mo
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 2, opacity: "0.8" }}
                    className={classes.title}
                    variant="h6"
                  >
                    All the basics for starting a new business
                  </Typography>
                  <Divider />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "self-start",
                      justifySelf: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        1 user
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Space plan features
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        1 app
                      </Typography>
                    </Box>
                  </Box>
                  {
                    currentPlan[0].active === true?null:<Button onClick={()=>setShow(false)} variant="contained" >
                    Renew your Plan
                    </Button>
                  }
                </CardContent>
              </Card>
            </Grid>
          ) : null}
          {currentPlan[0].type === "Team" ? (
            <Grid item md={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  boxShadow: "0px 0px 5px 1px #C8C8C8",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {currentPlan[0].active === true ? (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#33CC00", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Current Plan
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CancelIcon
                            sx={{ color: "#800000 ", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Plan Expired
                          </Typography>
                        </Box>
                      )}
                      <Container>
                        <Typography variant="h2">Team</Typography>
                      </Container>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Typography variant="h5">$</Typography>
                      <Typography variant="h1">39</Typography>
                      <Typography
                        sx={{ alignSelf: "end" }}
                        variant="headline"
                        component="h5"
                      >
                        /mo
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 2, opacity: "0.8" }}
                    className={classes.title}
                    variant="h6"
                  >
                    Everything you need for a growing business
                  </Typography>
                  <Divider />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "self-start",
                      justifySelf: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}

                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        3 users
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Space plan features
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        3 apps
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Product support
                      </Typography>
                    </Box>
                  </Box>
                  {
                    currentPlan[0].active === true?null:<Button onClick={()=>setShow(false)} variant="contained" >
                    Renew your Plan
                    </Button>
                  }
                  
                </CardContent>
              </Card>
            </Grid>
          ) : null}
          {currentPlan[0].type === "Enterprise" ? (
            <Grid item md={12}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  boxShadow: "0px 0px 5px 1px #C8C8C8",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                    {currentPlan[0].active === true ? (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#33CC00", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Current Plan
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#800000 ", fontSize: "3em", mr: 2 }}
                          />
                          <Typography color="primary" variant="h2">
                            Plan Expired
                          </Typography>
                        </Box>
                      )}
                      <Container>
                        <Typography variant="h2">Enterprise</Typography>
                      </Container>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Typography variant="h5">$</Typography>
                      <Typography variant="h1">59</Typography>
                      <Typography
                        sx={{ alignSelf: "end" }}
                        variant="headline"
                        component="h5"
                      >
                        /mo
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 2, opacity: "0.8" }}
                    className={classes.title}
                    variant="h6"
                  >
                    Advanced features for scaling your business
                  </Typography>
                  <Divider />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "self-start",
                      justifySelf: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Unlimited users
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Space plan features
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Unlimited apps
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      {currentPlan[0].active === true ? (
                        <CheckIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          size="small"
                          sx={{ color: "green", mt: 1, mr: 2 }}
                        />
                      )}
                      <Typography
                        sx={{ mt: 1, opacity: "0.8" }}
                        className={classes.title}
                        variant="h6"
                      >
                        Product support
                      </Typography>
                    </Box>
                  </Box>
                  {
                    currentPlan[0].active === true?null:<Button onClick={()=>setShow(false)} variant="contained" >
                    Renew your Plan
                    </Button>
                  }
                </CardContent>
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </center>
    );
  }

  return (
    <>
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          boxShadow: 10,
        }}
      >
        <Grid container spacing={0.2}>
          <Grid item md={4}>
            <Card
              sx={{
                borderRadius: "1px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className={classes.card}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h5">$</Typography>
                  <Typography variant="h1">19</Typography>
                  <Typography
                    sx={{ alignSelf: "end" }}
                    variant="headline"
                    component="h5"
                  >
                    /mo
                  </Typography>
                </Box>
                <Typography
                  sx={{ mt: 2, fontSize: "1.2em", textColor: "black" }}
                  variant="h5"
                >
                  Professional
                </Typography>
                <Typography
                  sx={{ mt: 2, opacity: "0.8" }}
                  className={classes.title}
                  variant="h6"
                >
                  All the basics for starting a new business
                </Typography>
                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "self-start",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      1 user
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Space plan features
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      1 app
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: "flex", flexDirection: "column", mt: 7 }}
              >
                <Button
                  onClick={() => {
                    setItem({ amount: 19, type: "Professional" });
                    setShowPayment(true);
                  }}
                >
                  Choose the plan
                </Button>
                <Typography className={classes.title} color="textSecondary">
                  No card required
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                borderRadius: "1px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={classes.card}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h5">$</Typography>
                  <Typography variant="h1">39</Typography>
                  <Typography
                    sx={{ alignSelf: "end" }}
                    variant="headline"
                    component="h5"
                  >
                    /mo
                  </Typography>
                </Box>
                <Typography
                  sx={{ mt: 2, fontSize: "1.2em", textColor: "black" }}
                  variant="h5"
                >
                  Team
                </Typography>
                <Typography
                  sx={{ mt: 2, opacity: "0.8" }}
                  className={classes.title}
                  variant="h6"
                >
                  Everything you need for a growing business
                </Typography>
                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "self-start",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      3 users
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Space plan features
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      3 apps
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Product support
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setItem({ amount: 39, type: "Team" });
                    setShowPayment(true);
                  }}
                >
                  Choose the plan
                </Button>
                <Typography
                  sx={{ mt: 1 }}
                  className={classes.title}
                  color="textSecondary"
                >
                  No card required
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid sx={{ borderRadius: "1px" }} item md={4}>
            <Card
              sx={{
                borderRadius: "1px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={classes.card}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h5">$</Typography>
                  <Typography variant="h1">59</Typography>
                  <Typography
                    sx={{ alignSelf: "end" }}
                    variant="headline"
                    component="h5"
                  >
                    /mo
                  </Typography>
                </Box>
                <Typography
                  sx={{ mt: 2, fontSize: "1.2em", textColor: "black" }}
                  variant="h5"
                >
                  Enterprise
                </Typography>
                <Typography
                  sx={{ mt: 2, opacity: "0.8" }}
                  className={classes.title}
                  variant="h6"
                >
                  Advanced features for scaling your business
                </Typography>
                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "self-start",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Unlimited users
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Space plan features
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Unlimited apps
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <CheckIcon
                      size="small"
                      sx={{ color: "green", mt: 1, mr: 2 }}
                    />
                    <Typography
                      sx={{ mt: 1, opacity: "0.8" }}
                      className={classes.title}
                      variant="h6"
                    >
                      Product support
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  onClick={() => {
                    setItem({ amount: 59, type: "Enterprise" });
                    setShowPayment(true);
                  }}
                >
                  Choose the plan
                </Button>
                <Typography className={classes.title} color="textSecondary">
                  No card required
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default withStyles(styles)(PansPricing);
