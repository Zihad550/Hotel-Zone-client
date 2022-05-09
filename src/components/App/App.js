import Header from "components/Shared/Header/Header";
import ContextProvider from "contexts/ContextProvider";
import { ErrorBoundary } from 'ErrorBoundary/ErrorBoundary';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutUs from './AboutUs/AboutUs';
import "./App.css";
import AdminRoute from "./Authentication/AdminRoute/AdminRoute";
import Login from "./Authentication/Login/Login";
import PrivateRoute from "./Authentication/PrivateRoute/PrivateRoute";
import Register from "./Authentication/Register/Register";
import Blogs from "./Blogs/Blogs";
import ContactUs from "./ContactUs/ContactUs";
import AddNewCity from './Dashboard/AddNewCity/AddNewCity';
import AddPhoto from "./Dashboard/AddPhoto/AddPhoto";
import CreateBlog from "./Dashboard/CreateBlog/CreateBlog";
import DashboardContainer from "./Dashboard/Dashboard";
import GiveReview from "./Dashboard/GiveReview/GiveReview";
import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
import ManageBanner from './Dashboard/ManageBanner/ManageBanner';
import ManageBlogs from "./Dashboard/ManageBlogs/ManageBlogs";
import ManageGalleryPhotos from "./Dashboard/ManageGallery/ManageGallery";
import MyBookings from "./Dashboard/MyBookings/MyBookings";
import MyReviews from "./Dashboard/MyReviews/MyReviews";
import BestRooms from "./Home/BestRooms/BestRooms";
import Book from "./Home/Book/Book";
import Home from "./Home/Home";
import AvailableResturents from "./Home/Hotels/Hotels";


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

            {/* other routes */}
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
           
           {/* authentication routes */}
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

            {/* admin route dashboard home page */}
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <MakeAdmin/>
                </AdminRoute>
              }
            />
            {/* normal user dashboard home page */}
            <Route path="/dashboard" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
            

              {/* normal user routes */}
              <Route path="/dashboard/myBookings" element={<MyBookings />} />
              <Route path="/dashboard/myReviews" element={<MyReviews />} />
              <Route path="/dashboard/review/:name" element={<GiveReview />} />
              
              {/* admin routes */}
              
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
                    <ManageBanner />
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
