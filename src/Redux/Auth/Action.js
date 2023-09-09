import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from './ActionTypes';
import api, { API_BASE_URL } from '../../config/api';
import { toast } from "react-toastify";

// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const register = userData => async dispatch => {
  dispatch(registerRequest());
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("registerr :",user)
    dispatch(registerSuccess(user));
    if(user.status){
      toast.success("User Register and Logged in Successfully", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
    
  } catch (error) {
    console.log(error.response.data.error)
    toast.error(`Email is already Registered`, {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: false,
    });
    dispatch(registerFailure(error.message));
    
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if(user.jwt) localStorage.setItem("jwt",user.jwt)
    console.log("login ",user)
  
    console.log(user.error)
    if(user.error)
    {
      toast.error(`${user.error}`, {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
    else if(user.status){
      toast.success(`${user.userRole} Logged in Successfully`, {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
      });
    }


    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
    
  }
};



//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ",user)

    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
      toast.success("Thanks for visiting our Store", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
      });
    };
  };
