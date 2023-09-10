import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from './config/api';
import axios from 'axios';
import AboutUsPage from './Pages/About';
import { UserContext } from './UserContext';
import { useContext } from "react";
import Homepage from './Pages/Homepage';
import AccessDenied from './Pages/AccessDenied';
// import Routers from './Routers/Routers';

function App() {
  
  const {  admin , setAdmin } = useContext(UserContext);
 
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        
        <Route path="/admin/*" element={admin ? ( <AdminPannel /> ) : ( <AccessDenied/> ) } />

        
      </Routes>
    </div>
  );
}

export default App;
