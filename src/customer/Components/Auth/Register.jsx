import React, { useEffect, useState } from "react";

import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getUser, register } from "../../../Redux/Auth/Action";

import EmailIcon from "@mui/icons-material/Email";

import LockIcon from "@mui/icons-material/Lock";

import PersonIcon from "@mui/icons-material/Person";

 

export default function RegisterUserForm({ handleNext }) {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const { auth } = useSelector((store) => store);

  const jwt = localStorage.getItem("jwt");

 

  const [validationErrors, setValidationErrors] = useState({

    email: "",

    password: "",

  });

 

  const [formValues, setFormValues] = useState({

    firstName: "",

    lastName: "",

    email: "",

    password: "",

  });

 

  useEffect(() => {

    if (jwt && !auth.user) {

      dispatch(getUser(jwt));

    }

  }, [jwt]);

 

  useEffect(() => {

    if (auth.user || auth.error) {

      setOpenSnackBar(true);

    }

  }, [auth.user, auth.error]);

 

  const handleClose = () => setOpenSnackBar(false);

 

  const isPasswordValid = (password) => {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return regex.test(password);

  };

 

  const validateEmail = (email) => {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);

  };

 

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormValues((prevValues) => ({

      ...prevValues,

      [name]: value,

    }));

 

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

 

  const handleSubmit = (event) => {

    event.preventDefault();

 

if (validationErrors.email === "" && validationErrors.password === "") {

      dispatch(register(formValues));

    }

  };

 

  const isRegistrationDisabled =

validationErrors.email !== "" ||

    validationErrors.password !== "" ||

    !formValues.firstName ||

    !formValues.lastName;

 

  return (

    <div className="mx-auto max-w-md">

      <h2 className="text-2xl font-semibold mb-4 text-center text-[#9155FD] mb-9">Create an Account</h2>

      <form onSubmit={handleSubmit}>

        <Grid container spacing={3} >

          <Grid item xs={12} sm={6}>

            <TextField

              required

              id="firstName"

              name="firstName"

              label="First Name"

              fullWidth

              autoComplete="given-name"

              InputProps={{

                startAdornment: <PersonIcon className="text-[#9155FD] " />,

              }}

              onChange={handleInputChange}

              value={formValues.firstName}

            />

          </Grid>

          <Grid item xs={12} sm={6}>

            <TextField

              required

              id="lastName"

              name="lastName"

              label="Last Name"

              fullWidth

              autoComplete="family-name"

              InputProps={{

                startAdornment: <PersonIcon className="text-[#9155FD] " />,

              }}

              onChange={handleInputChange}

              value={formValues.lastName}

            />

          </Grid>

          <Grid item xs={12}>

            <TextField

              required

              id="email"

              name="email"

              label="Email"

              fullWidth

              autoComplete="email"

              InputProps={{

                startAdornment: <EmailIcon className="text-[#9155FD] " />,

              }}

              onChange={handleInputChange}

value={formValues.email}

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

              autoComplete="new-password"

              type="password"

              InputProps={{

                startAdornment: <LockIcon className="text-[#9155FD] " />,

              }}

              onChange={handleInputChange}

              value={formValues.password}

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

              disabled={isRegistrationDisabled}

            >

              Register

            </Button>

          </Grid>

        </Grid>

      </form>

      <div className="flex justify-center flex-col items-center mt-4">

        <div className="py-3 flex items-center">

          <p className="m-0 p-0">Already have an account?</p>

          <Button onClick={() => navigate("/login")} sx={{marginTop:"3px"}}>

            Login

          </Button>

        </div>

      </div>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>

        <Alert onClose={handleClose} severity={auth.error ? "error" : "success"} sx={{ width: '100%' }}>

          {auth.error ? auth.error : auth.user ? "Registration Success" : ""}

        </Alert>

      </Snackbar>

    </div>

  );

}