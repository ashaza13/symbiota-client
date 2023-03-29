import React, { useEffect, useContext } from 'react';
import {
  useLocation,
  Route,
  Navigate,
} from 'react-router-dom'

import UserContext from './UserContext';

export default function PrivateRoute({
  component: Component, ...rest
}) {
  const context = useContext(UserContext);

  let location = useLocation();
  useEffect(() => {
    context.updateCurrentUser()
  }, [location]);

  const isAuthenticated = context.user && context.user.username ? true : false
  const isLoaded = context.isLoaded
  if (!isLoaded) return null

  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/profile",
            }}
          />
        )
      }}
    />
  )
}