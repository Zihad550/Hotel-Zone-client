import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ContextProvider from "./contexts/ContextProvider";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import AboutUs from "./Pages/AboutUs";
import AvailableResturents from "./Pages/AvailableResturents/AvailableResturents";
import Blogs from "./Pages/Blogs/Blogs";
import Book from "./Pages/Book/Book";
import ContactUs from "./Pages/ContactUs";
import AddNewCity from "./Pages/Dashboard/AddNewCity/AddNewCity";
import AddPhoto from "./Pages/Dashboard/AddPhoto/AddPhoto";
import CreateBlog from "./Pages/Dashboard/CreateBlog/CreateBlog";
import DashboardContainer from "./Pages/Dashboard/DashboardContainer/DashboardContainer";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/Dashboard/ManageBlogs/ManageBlogs";
import ManageExistingCities from "./Pages/Dashboard/ManageExistingCities/ManageExistingCities";
import ManageExistingPhoto from "./Pages/Dashboard/ManageExistingPhoto/ManageExistingPhoto";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import Review from "./Pages/Dashboard/Review/Review";
import BestRooms from "./Pages/HomePage/BestRooms/BestRooms";
import Home from "./Pages/HomePage/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import SearchHotels from "./Pages/SearchHotels/SearchHotels";
import Header from "./Pages/Shared/Header/Header";
const App = () => {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* sub routes */}
            <Route path="/searchHotels" element={<SearchHotels />} />
            <Route path="/bestRooms" element={<BestRooms />} />
            <Route
              path="/availableResturents/:dest_id/:latitude/:longitude"
              element={<AvailableResturents />}
            />
            <Route
              path="/book"
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
            {/* <Route path="/review/:name" element={<Review />} />
            <Route path="/reviews" element={<Reviews />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* dashboard routes */}]
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardContainer />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard/myBookings" element={<MyBookings />} />
              <Route path="/dashboard/myReviews" element={<MyReviews />} />
              <Route path="/dashboard/review/:name" element={<Review />} />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
             
             {/* city routes */}
              <Route
                path="/dashboard/manageExistingCities"
                element={
                  <AdminRoute>
                    <ManageExistingCities />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/AddNewCity"
                element={
                  <AdminRoute>
                    <AddNewCity />
                  </AdminRoute>
                }
              />
             
             {/* gallery routes */}
              <Route
                path="/dashboard/addPhoto"
                element={
                  <AdminRoute>
                    <AddPhoto />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageExistingPhoto"
                element={
                  <AdminRoute>
                    <ManageExistingPhoto />
                  </AdminRoute>
                }
              />
             {/* blog routes */}
              <Route
                path="/dashboard/createBlog"
                element={
                  <AdminRoute>
                    <CreateBlog />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageBlogs"
                element={
                  <AdminRoute>
                    <ManageBlogs />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
