import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
