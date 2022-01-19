import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import { useTheme } from "@material-ui/core/styles";
import {
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Box,
} from "@material-ui/core";

// project imports
import AuthWrapper1 from "../AuthWrapper1";
import AuthCardWrapper from "../AuthCardWrapper";
import FirebaseLogin from "../firebase-forms/FirebaseLogin";
import AuthFooter from "ui-component/cards/AuthFooter";
import FirebaseGoogleLogin from "../firebase-forms/FirebaseGoogleLogin";
import FirebaseFacebookLogin from "../firebase-forms/FirebaseFacebookLogin";
import FirebaseTwitterLogin from "../firebase-forms/FirebaseTwitterLogin";

// assets

//= ===============================|| AUTH3 - LOGIN ||================================//

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid item xs={12}>
                  <center
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/logo.png"}
                      height="50%"
                      width="50%"
                    />
                  </center>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Welcome to Evanalin
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : ""}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FirebaseLogin login={3} />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider>OR</Divider>
                  </Grid>
                  <Grid item xs={12}>
                    <FirebaseGoogleLogin />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <FirebaseFacebookLogin />
                  </Grid> */}
                  <Grid item xs={12}>
                    <FirebaseTwitterLogin />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
