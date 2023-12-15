import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { app, auth } from "../context/firebaseConfig";
import { Context } from "../context/contextAPI";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { grey, red } from "@mui/material/colors";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiTwitterFill } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
const defaultTheme = createTheme();

export default function SignIn() {
  const { setloading } = useContext(Context);
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
        notify("Welcome back " + auth?.currentUser?.displayName);
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
    if (!email.match(validEmail)) {
      setError("Enter a valid email.");
    } else if (!password.match(validPassw)) {
      setError("Enter a valid password.");
    } else {
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          setloading(false);
          navigate("/");
          notify("Welcome back " + auth?.currentUser?.displayName);
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
    <div className="h-[90vh]">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
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
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link variant="body2" underline="none" color={grey[900]}>
                    Or Sign In with
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
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
