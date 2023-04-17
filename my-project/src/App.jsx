import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Signup from "./components/authentication/signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
