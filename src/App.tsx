import React from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from "pages/homepage";
import Splash from "pages/splash";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
