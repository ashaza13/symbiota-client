import React from 'react';
import {
    BrowserRouter, Route, Link, Routes
} from 'react-router-dom';
import { css } from '@emotion/css';

import Home from './Home';
import Profile from './Profile';
import Protected from './Protected';
import ProtectedRoute from './ProtectedRoute';
import Nav from './components/Navbar';

import theme from './theme';

const { primaryColor } = theme;

export default function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <div className={containerStyle}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    { /* For a protected route, use the ProtectedRoute component */}
                    {/* FIX ME */}
                    {/* <ProtectedRoute
                        exact
                        path="/app"
                        component={Protected}
                    /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const linkTitleStyle = css`
  text-decoration: none;
`

const containerStyle = css`
  padding: 0px 30px;
`

const linkStyle = css`
  color: white;
  text-decoration: none;
  margin-left: 10px;
  font-size: 18px;
  &:hover {
    color: #ddd;
  }
`

const headingStyle = css`
  background-color: ${primaryColor};
  padding: 30px;
  display: flex;
  align-items: center;
`

const titleStyle = css`
  color: white;
  margin: 0;
  font-size: 32px;
  margin-right: 50px;
`