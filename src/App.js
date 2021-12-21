import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import AvailableResturents from "./Pages/AvailableResturents/AvailableResturents";
import Book from "./Pages/Book/Book";
import DashboardContainer from "./Pages/Dashboard/DashboardContainer/DashboardContainer";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import Review from "./Pages/Dashboard/Review/Review";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Reviews from "./Pages/Reviews/Reviews";
import SearchHotels from "./Pages/SearchHotels/SearchHotels";
import Header from "./Pages/Shared/Header/Header";
const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/searchHotels" element={<SearchHotels />} />
            <Route
              path="/availableResturents/:dest_id/:latitude/:longitude"
              element={<AvailableResturents />}
            />
            <Route
              path="/Book/:name/:price/:latitude/:longitude/:currency"
              element={<Book />}
            />
            <Route path="/review/:name" element={<Review />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* dashboard routes */}]
            <Route path="/dashboard" element={<DashboardContainer />}>
              <Route path="/dashboard/myBookings" element={<MyBookings />} />
              <Route path="/dashboard/myReviews" element={<MyReviews />} />
              <Route path="/dashboard/review/:name" element={<Review />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
