import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "pages/homepage";
import Splash from "pages/splash";
import Onboarding from 'pages/onboarding';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
