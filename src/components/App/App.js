import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ContextProvider from "../../contexts/ContextProvider";
import { ErrorBoundary } from '../../ErrorBoundary/ErrorBoundary';
import Header from "../Shared/Header/Header";
import AboutUs from './AboutUs/AboutUs';
import "./App.css";
import Blogs from "./Blogs/Blogs";
import ContactUs from "./ContactUs/ContactUs";
import AddNewCity from './Dashboard/AddNewCity/AddNewCity';
import AddPhoto from "./Dashboard/AddPhoto/AddPhoto";
import CreateBlog from "./Dashboard/CreateBlog/CreateBlog";
import DashboardContainer from "./Dashboard/Dashboard";
import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
import ManageBannerCities from './Dashboard/ManageBannerCities/ManageBannerCities';
import ManageBlogs from "./Dashboard/ManageBlogs/ManageBlogs";
import ManageGalleryPhotos from "./Dashboard/ManageGalleryPhotos/ManageGalleryPhotos";
import MyBookings from "./Dashboard/MyBookings/MyBookings";
import MyReviews from "./Dashboard/MyReviews/MyReviews";
import Review from "./Dashboard/Review/Review";
import AvailableResturents from "./Home/AvailableResturents/AvailableResturents";
import BestRooms from "./Home/BestRooms/BestRooms";
import Book from "./Home/Book/Book";
import Home from "./Home/Home";
import SearchHotels from "./Home/SearchHotels/SearchHotels";
import AdminRoute from "./Login/AdminRoute/AdminRoute";
import Login from "./Login/Login/Login";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import Register from "./Login/Register/Register";
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
                    <ManageBannerCities />
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
                    <ManageGalleryPhotos />
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
