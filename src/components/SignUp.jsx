import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";
import { app, auth } from "../context/firebaseConfig";
import { Context } from "../context/contextAPI";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const defaultTheme = createTheme();
export default function SignUp() {
  const { setloading } = useContext(Context);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg);
  };
  const signUp = (provider) => {
    setloading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        setloading(false);
        navigate("/");
        notify("Successfully Signed Up");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPassw =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{5,15}$/;
    if (fname.length === 0) {
      setError("First name can't be empty.");
    } else if (lname.length === 0) {
      setError("Last name can't be empty.");
    } else if (!email.match(validEmail)) {
      setError("Enter a valid email.");
    } else if (!password.match(validPassw)) {
      setError("Enter a valid password.");
    } else {
      setError("");
      setloading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setloading(false);
          updateProfile(auth.currentUser, {
            displayName: fname + " " + lname,
          }).then(() => {
            // console.log(auth.currentUser);
            navigate("/");
            notify("Successfully Signed Up");
          });
        })
        .catch((error) => {
          setloading(false);
          setError(error.message);
        });
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (auth.currentUser != null) {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="h-[90vh] bg-white">
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          className="bg-white rounded-lg"
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "black", color: "white" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    onChange={(e) => setFname(e.target.value)}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={(e) => setLname(e.target.value)}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive new movies promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link variant="body2" underline="none" color={red[500]}>
                    {error}
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 1, mb: 1 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link variant="body2" underline="none" color={grey[900]}>
                    Or Sign Up with
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 0.1, mb: 0.5 }}>
                <Grid item xs={4} className="flex justify-end">
                  <FcGoogle
                    className="rounded-full p-[1px] text-4xl cursor-pointer transition border-2 hover:shadow-lg hover:shadow-red-600 hover:border-red-600"
                    onClick={() => {
                      const provider = new GoogleAuthProvider();
                      signUp(provider);
                    }}
                  />
                </Grid>
                <Grid item xs={4} className="flex justify-center">
                  <ImFacebook
                    className="bg-blue-950 text-white py-2 text-4xl rounded-full cursor-pointer transition border-2 hover:shadow-lg hover:shadow-blue-950 hover:border-blue-950 hover:text-blue-950 hover:bg-white"
                    onClick={() => {
                      const provider = new FacebookAuthProvider();
                      signUp(provider);
                    }}
                  />
                </Grid>
                <Grid item xs={4} className="flex justify-start">
                  <RiTwitterFill
                    className="hover:bg-white hover:text-cyan-600 p-1 text-4xl rounded-full cursor-pointer transition border-2 hover:shadow-lg hover:shadow-cyan-600 hover:border-cyan-600 text-white bg-cyan-600"
                    onClick={() => {
                      const provider = new TwitterAuthProvider();
                      signUp(provider);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginBottom="10px">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
