import React, { useState, useEffect } from "react";

import { Container, Typography, Button, Avatar } from "@material-ui/core";

import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import InfoIcon from '@mui/icons-material/Info';

import HelpIcon from '@mui/icons-material/Help';

import LocalMallcontainedIcon from '@mui/icons-material/LocalMall';

import axios from "axios";

import PolicyIcon from '@mui/icons-material/Policy';

import { API_BASE_URL } from "../../../config/api";

 

const MyAccountPage = () => {

  const jwt = localStorage.getItem("jwt");

  const [userDetail, setUserDetails] = useState([]);

 

  const handlelog = () => { 

    sessionStorage.removeItem('isLoggedin');

    toast.success('User Logged out Successfully!', {

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

        console.log("response user details api myAccount", response)

        setUserDetails(response?.data);

      })

      .catch(error => console.log('--userinfo--', error));

  };

 

  useEffect(() => {

    getUserDetails()

  }, []);

 

  return (

    <Container maxWidth="sm">

      <div className="flex flex-col items-center justify-center text-center">

        <Typography variant="h4" component="h1"> My Profile </Typography>

        <Typography variant="body1"> Welcome to your account page! Here you can manage your profile and settings. </Typography>

        

        <div className="mt-6">

          <div className="flex items-center">

            <Avatar className="w-24 h-24 bg-purple-600 text-white text-2xl">

              {userDetail.user?.firstName[0].toUpperCase()}

            </Avatar>

            <div className="ml-4 text-left">

              <div className="text-lg font-semibold">Name: {`${userDetail?.firstName} ${userDetail?.lastName}`}</div>

              <div className="text-lg">Email: {userDetail?.email}</div>

            </div>

          </div>

          

          <div className="mt-6">

            <div className="flex justify-center">

              <Link to="/orders">

                <Button className="bg-purple-600 text-white m-2" variant="contained" startIcon={<LocalMallcontainedIcon />}>

                  Orders

                </Button>

              </Link>

              <Link to="/wishlist">

                <Button className="bg-purple-600 text-white m-2" variant="contained" startIcon={<ShoppingBasketIcon />}>

                  Wishlist

                </Button>

              </Link>

              <Link>

                <Button className="bg-purple-600 text-white m-2" variant="contained" startIcon={<LocalOfferIcon />}>

                  Coupons

                </Button>

              </Link>

            </div>

            

            <div className="flex justify-center mt-4">

              <Link to="/AboutUS">

                <Button className="bg-purple-600 text-white m-2" variant="contained" startIcon={<InfoIcon />}>

                  About Us

                </Button>

              </Link>

              <Link to="/HelpCenter">

                <Button className="bg-purple-600 text-white m-2" variant="contained" startIcon={<HelpIcon />}>

                  Help Center

                </Button>

              </Link>

              <Link href="/privacy-policy">

                <Button href="/privacy-policy" className="bg-purple-600 text-white m-2" variant="contained" startIcon={<PolicyIcon />}>

                  Policy

                </Button>

              </Link>

            </div>

          </div>

          

          <div className="mt-6">

            <Link to="/login">

              <Button

                style={{ backgroundColor: "#9155FD", height: "40px", width: "200px", color: "white" }}

                variant="contained"

                onClick={handlelog}

              >

                Log Out

              </Button>

            </Link>

          </div>

        </div>

      </div>

    </Container>

  );

};

 

export default MyAccountPage;