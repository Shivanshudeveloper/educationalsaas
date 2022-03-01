import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";

import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CardContent,
  DialogTitle,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { API_SERVICE } from "config";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CardInput from "./CardInput";
import CloseIcon from "@material-ui/icons/Close";
import { getSessionStorageOrDefault } from "utils/getSessionStorageOrDefault";

/* eslint no-underscore-dangle: 0 */
/* eslint no-nested-ternary: 0 */
/* eslint no-else-return: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
const Payment = ({ total, type, setShowPaymentHandler, show }) => {
  const navigate = useNavigate();
  const [showPopper, setShowPopper] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState({
    show: false,
    error: false,
    message: "",
  });
  const [Query, setQuery] = useState("");
  const [user, setUser] = useState({ email: "", username: "" });
  const [loading, setLoading] = useState(true);

  const [paysubmit, setPaySubmit] = useState(false);
  const [open, setOpen] = useState(false);

  const [paymentDone, setPaymentDone] = useState(false);
  const [guest, setGuest] = useState(false);
  const stripe = useStripe();
  const userEmail = getSessionStorageOrDefault("userEmail", "");
  const userName = getSessionStorageOrDefault("userName", "");

  const elements = useElements();
  const handleClick = () => {
    setOpen(true);
  };
  const confirmPayment = async (email, firstName, lastName) => {
    if (!stripe || !elements) {
      return;
    }
    setPaySubmit(true);

    try {
      const raw = await fetch(`${API_SERVICE}/charges`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          amount: total,
        }),
      });

      const res = await raw.json();
      const clientSecret = res.cc;
      console.log(clientSecret);
      try {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: email,
            },
          },
        });
        console.log(result);
        if (!result.err) {
          try {
            if (show) {
              const raw = await fetch(`${API_SERVICE}/addplan`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  price: total,
                  type: type,
                }),
              });
            } else {
              const raw = await fetch(`${API_SERVICE}/updateplan`, {
                method: "PATCH",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  price: total,
                  type: type,
                }),
              });
            }
            handleClick();

            setPaySubmit(false);
            setPaymentDone(true);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const pay = (values, { setErrors, setSubmitting }) => {
    const { email, firstName, lastName } = values;

    confirmPayment(email, firstName, lastName);
  };

  useEffect(() => {
    const get = async () => {
      try {
        const rawResponse = await fetch(
          `${API_SERVICE}/api/v1/main/user/getuser/${user.email}`
        );
        const content = await rawResponse.json();

        console.log(content[0]);
        setUser(content[0]);
        setUser((old) => ({ ...old, username: content[0].username }));
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    get();
  }, [Query]);
  useEffect(() => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    const Email = vars[0].split("=")[1];

    setUser((old) => ({ ...old, email: Email }));

    setQuery(query);
  }, []);

  if (paymentDone) {
    return (
      <>
        <Helmet>
          <title>payment Succesfully Done</title>
        </Helmet>
        <BootstrapDialog
          fullWidth
          onClose={() => {
            setShowPaymentHandler(false);
          }}
          aria-labelledby="customized-dialog-title"
          open={paymentDone}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={() => {
              setShowPaymentHandler(false);
            }}
          >
            Success
          </BootstrapDialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            dividers
          >
            {paymentDone ? (
              <img
                width="100px"
                height="90px"
                alt=""
                src={`${process.env.PUBLIC_URL}/success.gif`}
              />
            ) : null}
            <Typography gutterBottom>Payment Successfully Done</Typography>
          </DialogContent>
        </BootstrapDialog>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Payment </title>
      </Helmet>

      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb: 3,
        }}
      >
        <Button
          sx={{ alignSelf: "flex-start", borderRadius: 10 }}
          onClick={() => setShowPaymentHandler(false)}
        >
          <ArrowBackIcon sx={{ fontSize: "3.2em" }} />
        </Button>

        <Container>
          <Formik
            initialValues={{
              email: userEmail,
              firstName: userName.split(" ")[0],
              lastName: userName.split(" ")[1],
              amount: total,
              plan: type,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              firstName: Yup.string()
                .max(255)
                .required("First name is required"),
              lastName: Yup.string().max(255).required("Last name is required"),
            })}
            onSubmit={pay}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}></Box>
                <Box sx={{ display: "flex", width: "90%", marginLeft: "10%" }}>
                  <Box maxWidth="sm">
                    <center>
                      <Typography color="textPrimary" variant="h2">
                        Payment
                      </Typography>
                    </center>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      disabled={!guest}
                      value={values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      onBlur={handleBlur}
                      disabled={!guest}
                      onChange={handleChange}
                      value={values.firstName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      name="lastName"
                      disabled={!guest}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.plan && errors.plan)}
                      fullWidth
                      helperText={touched.plan && errors.plan}
                      label="Plan"
                      margin="normal"
                      name="Plan"
                      disabled
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={`${values.plan}`}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.amount && errors.amount)}
                      fullWidth
                      helperText={touched.amount && errors.amount}
                      label="Price"
                      margin="normal"
                      name="Price"
                      disabled
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={`${values.amount} $`}
                      variant="outlined"
                    />
                  </Box>
                  <Box
                    sx={{
                      boxShadow: 5,
                      p: 5,
                      borderRadius: 5,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20%",
                    }}
                  >
                    <h3 className="text-center font-weight-bold">
                      Card Details
                    </h3>
                    <CardContent>
                      <CardInput />
                    </CardContent>
                    <Box sx={{ mt: 5 }}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <label>I Accept Terms And Condition</label>
                    </Box>
                    <Box
                      sx={{ py: 2, display: "flex", flexDirection: "column" }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={paysubmit}
                      >
                        {paysubmit ? "Confirming Payment" : "Pay"}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Payment;
