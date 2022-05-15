import Header from "components/Shared/Header/Header";
import ContextProvider from "contexts/ContextProvider";
import { ErrorBoundary } from "ErrorBoundary/ErrorBoundary";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutUs from "./AboutUs";
import "./App.css";
import AdminRoute from "./Authentication/AdminRoute";
import Login from "./Authentication/Login";
import PrivateRoute from "./Authentication/PrivateRoute";
import Register from "./Authentication/Register";
import Blogs from "./Blogs";
import Book from "./Book";
import ContactUs from "./ContactUs";
import AdminDashboard from "./Dashboards/AdminDashboard";
import AddNewCity from "./Dashboards/AdminDashboard/AddNewCity";
import AddPhoto from "./Dashboards/AdminDashboard/AddPhoto";
import CreateBlog from "./Dashboards/AdminDashboard/CreateBlog";
import MakeAdmin from "./Dashboards/AdminDashboard/MakeAdmin";
import ManageBlogs from "./Dashboards/AdminDashboard/ManageBlogs";
import ManageCities from "./Dashboards/AdminDashboard/ManageCities";
import ManageGalleryPhotos from "./Dashboards/AdminDashboard/ManageGallery";
import UserDashboard from "./Dashboards/UserDashboard";
import GiveReview from "./Dashboards/UserDashboard/GiveReview";
import MyBookings from "./Dashboards/UserDashboard/MyBookings";
import MyReviews from "./Dashboards/UserDashboard/MyReviews";
import Home from "./Home";
import Hotels from "./Hotels";

const App = () => {
  const [dashboardPageTitle, setDashboardPageTitle] = useState("Dashboard");

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
            <Route
              path="/hotels/:dest_id/:latitude/:longitude"
              element={<Hotels />}
            />
            <Route
              path="/book/:id/:price"
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
            {/* authentication routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* userDashboard routes */}]
            <Route
              path="/userDashboard"
              element={
                <PrivateRoute>
                  <UserDashboard dashboardPageTitle={dashboardPageTitle} />
                </PrivateRoute>
              }
            >
              {/* normal user routes */}
              <Route
                path="/userDashboard/myBookings"
                element={
                  <PrivateRoute>
                    <MyBookings setDashboardPageTitle={setDashboardPageTitle} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/userDashboard/myReviews"
                element={
                  <PrivateRoute>
                    <MyReviews setDashboardPageTitle={setDashboardPageTitle} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/userDashboard/review/:name"
                element={
                  <PrivateRoute>
                    <GiveReview setDashboardPageTitle={setDashboardPageTitle} />
                  </PrivateRoute>
                }
              />
            </Route>
            {/* admin dashboard */}
            <Route
              path="/adminDashboard"
              element={
                <AdminRoute>
                  <AdminDashboard dashboardPageTitle={dashboardPageTitle} />
                </AdminRoute>
              }
            >
              {/* <Route
                path="/adminDashboard"
                element={
                  <AdminRoute>
                    <MakeAdmin setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              /> */}
              <Route
                path="/adminDashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />

              {/* city routes */}
              <Route
                path="/adminDashboard/manageExistingCities"
                element={
                  <AdminRoute>
                    <ManageCities
                      setDashboardPageTitle={setDashboardPageTitle}
                    />
                  </AdminRoute>
                }
              />
              <Route
                path="/adminDashboard/AddNewCity"
                element={
                  <AdminRoute>
                    <AddNewCity setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />

              {/* gallery routes */}
              <Route
                path="/adminDashboard/addPhoto"
                element={
                  <AdminRoute>
                    <AddPhoto setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />
              <Route
                path="/adminDashboard/manageExistingPhoto"
                element={
                  <AdminRoute>
                    <ManageGalleryPhotos
                      setDashboardPageTitle={setDashboardPageTitle}
                    />
                  </AdminRoute>
                }
              />
              {/* blog routes */}
              <Route
                path="/adminDashboard/createBlog"
                element={
                  <AdminRoute>
                    <CreateBlog setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />
              <Route
                path="/adminDashboard/manageBlogs"
                element={
                  <AdminRoute>
                    <ManageBlogs
                      setDashboardPageTitle={setDashboardPageTitle}
                    />
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
