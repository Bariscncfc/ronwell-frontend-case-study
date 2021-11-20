import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LaunchDetails from "./pages/Details/LaunchDetails";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/launch/:id" element={<LaunchDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
