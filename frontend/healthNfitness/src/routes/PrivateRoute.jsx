import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component }) => {
  const { authenticated } = useSelector((state) => state.user);

  return authenticated ? component : <Navigate to="/login" replace />;
};

export default PrivateRoute;