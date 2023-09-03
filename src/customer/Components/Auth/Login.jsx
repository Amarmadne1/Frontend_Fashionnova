import React, { useEffect, useState } from "react";

import { Grid, TextField, Button, Snackbar, Alert, Avatar } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getUser, login } from "../../../Redux/Auth/Action";

import EmailIcon from "@mui/icons-material/Email";

import LockIcon from "@mui/icons-material/Lock";

import FaceIcon from "@mui/icons-material/Face"; // Emoji profile avatar

 

export default function LoginUserForm({ handleNext }) {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [message, setMessage] = useState();
  const { auth } = useSelector((store) => store);

  const jwt = localStorage.getItem("jwt");

 

  const [validationErrors, setValidationErrors] = useState({

    email: "",

    password: "",

  });

 

  useEffect(() => {

    if (jwt) {

      dispatch(getUser(jwt));

    }
  

  }, [jwt]);

 

  useEffect(() => {

    if (auth.user || auth.error) {

      setOpenSnackBar(true);

    }

  }, [auth.user, auth.error]);

 

  const handleCloseSnackBar = () => setOpenSnackBar(false);

 

  const handleInputChange = (e) => {

    const { name, value } = e.target;

 

    if (name === "email") {

      const isValidEmail = validateEmail(value);

      setValidationErrors((prevErrors) => ({

        ...prevErrors,

        email: isValidEmail ? "" : "Invalid email format",

      }));

    }

 

    if (name === "password") {

      const isValidPassword = isPasswordValid(value);

      setValidationErrors((prevErrors) => ({

        ...prevErrors,

        password: isValidPassword

          ? ""

          : "Password must be at least 8 characters long and include an uppercase letter, a symbol, and a number.",

      }));

    }

  };

 

  const validateEmail = (email) => {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);

  };

 

  const isPasswordValid = (password) => {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);

  };

 

  const handleSubmit = (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {

      email: data.get("email"),

      password: data.get("password"),

    };

    dispatch(login(userData));
 


    

  };

 

  const isLoginDisabled =

validationErrors.email !== "" ||

    validationErrors.password !== "" ||

    auth.error; // Disable login if there's an error

 

  return (

    <div className="p-6 rounded-lg bg-white">

      <Avatar className="mx-auto mb-4" sx={{ backgroundColor: "#9155FD" }}>

        <FaceIcon fontSize="large"/>

      </Avatar>

      <form className="w-full" onSubmit={handleSubmit}>

        <Grid container spacing={3}>

          <Grid item xs={12}>

            <TextField

              required

              id="email"

              name="email"

              label="Email"

              fullWidth

              autoComplete="given-name"

              InputProps={{

                startAdornment: <EmailIcon className="text-[#9155FD]" />,

              }}

              onChange={handleInputChange}

error={validationErrors.email !== ""}

helperText={validationErrors.email}

            />

          </Grid>

          <Grid item xs={12}>

            <TextField

              required

              id="password"

              name="password"

              label="Password"

              fullWidth

              autoComplete="current-password"

              type="password"

              InputProps={{

                startAdornment: <LockIcon className="text-[#9155FD]" />,

              }}

              onChange={handleInputChange}

              error={validationErrors.password !== ""}

              helperText={validationErrors.password}

            />

          </Grid>

          <Grid item xs={12}>

            <Button

              className="bg-[#9155FD] w-full"

              type="submit"

              variant="contained"

              size="large"

              sx={{ padding: ".8rem 0" }}

              disabled={isLoginDisabled}

            >

              Login

            </Button>

          </Grid>

        </Grid>

      </form>

      <div className="flex justify-center flex-col items-center mt-4">

        {auth.error && (

          <Alert severity="error" className="w-full text-center">

            {auth.error}

          </Alert>

        )}

        <div className="py-3 flex items-center">

          <p className="m-0 p-0">Don't have an account?</p>

          <Button onClick={() => navigate("/register")} sx={{marginTop:"3px"}}>

            Register

          </Button>

        </div>

      </div>

      <Snackbar

        open={openSnackBar}

        autoHideDuration={6000}

        onClose={handleCloseSnackBar}

      >

        <Alert

          onClose={handleCloseSnackBar}

          severity={auth.error ? "error" : "success"}

          sx={{ width: "100%" }}

        >

          {auth.error ? auth.error : auth.user ? "Login Success" : ""}

        </Alert>

      </Snackbar>

    </div>

  );

}