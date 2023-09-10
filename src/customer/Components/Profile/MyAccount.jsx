import React, { useState, useEffect } from "react";

import { Container, Typography, Button, Avatar } from "@material-ui/core";

import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import InfoIcon from "@mui/icons-material/Info";

import HelpIcon from "@mui/icons-material/Help";

import LocalMallcontainedIcon from "@mui/icons-material/LocalMall";

import axios from "axios";

import PolicyIcon from "@mui/icons-material/Policy";

import { API_BASE_URL } from "../../../config/api";
import Person2Icon from '@mui/icons-material/Person2';
import { AccountCircle } from "mdi-material-ui";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from '@mui/icons-material/Email';
import { deepPurple } from "@mui/material/colors";

const MyAccountPage = () => {
  const jwt = localStorage.getItem("jwt");

  const [userDetail, setUserDetails] = useState([]);

  const handlelog = () => {
    sessionStorage.removeItem("isLoggedin");

    toast.success("User Logged out Successfully!", {
      position: "top-center",

      autoClose: 1000,

      pauseOnHover: false,
    });
  };

  const getUserDetails = () => {
    axios

      .get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })

      .then((response) => {
        console.log("response user details api myAccount", response);

        setUserDetails(response?.data);
      })

      .catch((error) => console.log("--userinfo--", error));
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Container maxWidth="sm" className="accountfooter ">
      <div className="flex flex-col items-center justify-center text-center">
        <Typography
          variant="h4"
          component="h1"
          className="text-3xl text-gray-600"
        >
          <AccountBoxIcon
            sx={{
              height: "50px",
              width: "50px",
              color: "rgb(124 58 237)",
            }}
          />{" "}
          My Profile{" "}
        </Typography>

        <div className="mt-6 ml-6 ">
          <div className="flex items-center ">
            <div className="ml-4 text-left">
              <div className="text-gray-600 bold text-xl">
                <Person2Icon
                  sx={{
                    height: "35px",
                    width: "30px",
                    color: "rgb(124 58 237)",
                    marginRight:"3px",
                  }}
                />
                  Name : {`${userDetail?.firstName} ${userDetail?.lastName}`}
              </div>

              <div className="mt-4 text-gray-600 bold text-xl">
                <EmailIcon
                  sx={{
                    height: "35px",
                    width: "30px",
                    color: "rgb(124 58 237)",
                    marginRight:"3px",
                  }}
                />
                Email : {userDetail?.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyAccountPage;
