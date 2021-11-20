import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LaunchDetails from "./pages/LaunchDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/launch/id" exact element={<LaunchDetails />} />
        <Route path="/adsa" exact element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
