import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "pages/homepage";
import Splash from "pages/splash";
import Onboarding from 'pages/onboarding';
import LoginPage from 'pages/auth/login';
import SignUpPage from 'pages/auth/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key = "/"
          path = "/"
          element = {<HomePage/>}
        />
        <Route
          key = "/home"
          path = "/home"
          element = {<HomePage/>}
        />
        <Route
          key = "/splash"
          path = "/splash"
          element = {< Splash />}
        />
        <Route
          key = "/onboarding"
          path = "/onboarding"
          element = {< Onboarding />}
        />
        <Route
          key = "/auth"
          path = "/auth"
          element = {< LoginPage />}
        />
        <Route
          key = "/auth/login"
          path = "/auth/login"
          element = {< LoginPage />}
        />
        <Route
          key = "/auth/signup"
          path = "/auth/signup"
          element = {< SignUpPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
