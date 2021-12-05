import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Review from "./Pages/Review/Review";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/Shared/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/review/:name" element={<Review />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
