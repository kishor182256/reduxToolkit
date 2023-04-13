import React, { useEffect } from "react";
import { Route, Navigate, Outlet, RouteProps, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes: React.FC = () => {
    const navigate = useNavigate();

 const token = useSelector((state: any) => state?.auth?.token?.token);
 console.log('token',token);
 

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token]);

  return  token ? <Outlet/>: null;

};


export default PrivateRoutes;
