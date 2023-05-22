import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';

import Nav from '../components/Nav';
import UserContext from '../routes/UserContext';
import Background from '../components/Background';
import SearchScreen from '../routes/SearchScreen';
import Profile from '../routes/Profile';
import HomeScreen from '../routes/HomeScreen';
import DetailsScreen from '../routes/DetailsScreen';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoaded, setIsLoaded] = useState({});

  useEffect(() => {
    updateCurrentUser();
    listen();
  }, []);

  function listen() {
    Hub.listen('auth', (data) => {
      if (data.payload.event === 'signIn') {
        updateCurrentUser();
      }
      if (data.payload.event === 'signOut') {
        updateCurrentUser();
      }
    });
  };

  async function updateCurrentUser(user = null) {
    if (user) {
      setCurrentUser(user);
      return
    }
    try {
      const user = await Auth.currentAuthenticatedUser()
      setCurrentUser(user);
      setIsLoaded(true);
    } catch (err) {
      setCurrentUser(null);
      setIsLoaded(true);
    }
  };

  return (
    <UserContext.Provider value={{
      user: currentUser,
      updateCurrentUser: updateCurrentUser,
      isLoaded: isLoaded
    }}>
      <div className="font-lato">
        <Background />
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/signup" element={<Profile />} />
          <Route path="/details/:id" element={<DetailsScreen />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;