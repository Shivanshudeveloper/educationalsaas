import React from "react";
import { auth, facebookProvider } from "../../../../Firebase";
import { useNavigate } from "react-router-dom";
import { TEST_API_SERVICE } from "../../../../config";
import axios from "axios";
import AnimateButton from "ui-component/extended/AnimateButton";
import { Button } from "@material-ui/core";

const FirebaseFacebookLogin = () => {
  const navigate = useNavigate();

  const signInWithFacebook = () =>
    auth
      .signInWithPopup(facebookProvider)
      .then((result) => {
        // @type {firebase.auth.OAuthCredential}
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user);
        if (user) {
          console.log(user);
          sessionStorage.setItem("userName", user.displayName);
          sessionStorage.setItem("userEmail", user.email);
          sessionStorage.setItem("userId", user.uid);
          sessionStorage.setItem("logo", user.photoURL);
          axios
            .post(`${TEST_API_SERVICE}/getuserbyemail`, {
              email: user.email,
            })
            .then((res) => {
              navigate("/dashboard/default");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  return (
    <div>
      <AnimateButton>
        <Button
          disableElevation
          fullWidth
          size="large"
          type="submit"
          // variant="contained"
          onClick={signInWithFacebook}
          sx={{ backgroundColor: "#fff", border: "1px solid #f0f0f0" }}
        >
          <img
            src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            height={25}
            style={{ marginRight: "20px" }}
          />
          Sign in with Facebook
        </Button>
      </AnimateButton>
    </div>
  );
};

export default FirebaseFacebookLogin;
