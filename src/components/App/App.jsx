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
import ContactUs from "./ContactUs";
import DashboardContainer from "./Dashboard";
import AddNewCity from "./Dashboard/AddNewCity";
import AddPhoto from "./Dashboard/AddPhoto";
import CreateBlog from "./Dashboard/CreateBlog";
import GiveReview from "./Dashboard/GiveReview";
import MakeAdmin from "./Dashboard/MakeAdmin";
import ManageBanner from "./Dashboard/ManageBanner";
import ManageBlogs from "./Dashboard/ManageBlogs";
import ManageGalleryPhotos from "./Dashboard/ManageGallery";
import MyBookings from "./Dashboard/MyBookings";
import MyReviews from "./Dashboard/MyReviews";
import Home from "./Home";
import BestRooms from "./Home/BestRooms";
import Book from "./Home/Book";
import Hotels from "./Home/Hotels";

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
            <Route path="/bestRooms" element={<BestRooms />} />
            <Route
              path="/availableResturents/:dest_id/:latitude/:longitude"
              element={<Hotels />}
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
                  <DashboardContainer dashboardPageTitle={dashboardPageTitle} />
                </PrivateRoute>
              }
            >
              {/* admin route dashboard home page */}
              <Route
                path="/dashboard"
                element={
                  <AdminRoute>
                    <MakeAdmin setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />
              {/* normal user dashboard home page */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <MyBookings setDashboardPageTitle={setDashboardPageTitle} />
                  </PrivateRoute>
                }
              />

              {/* normal user routes */}
              <Route
                path="/dashboard/myBookings"
                element={
                  <MyBookings setDashboardPageTitle={setDashboardPageTitle} />
                }
              />
              <Route
                path="/dashboard/myReviews"
                element={<MyReviews />}
                setDashboardPageTitle={setDashboardPageTitle}
              />
              <Route
                path="/dashboard/review/:name"
                element={
                  <GiveReview setDashboardPageTitle={setDashboardPageTitle} />
                }
              />

              {/* admin routes */}

              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />

              {/* city routes */}
              <Route
                path="/dashboard/manageExistingCities"
                element={
                  <AdminRoute>
                    <ManageBanner
                      setDashboardPageTitle={setDashboardPageTitle}
                    />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/AddNewCity"
                element={
                  <AdminRoute>
                    <AddNewCity setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />

              {/* gallery routes */}
              <Route
                path="/dashboard/addPhoto"
                element={
                  <AdminRoute>
                    <AddPhoto setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageExistingPhoto"
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
                path="/dashboard/createBlog"
                element={
                  <AdminRoute>
                    <CreateBlog setDashboardPageTitle={setDashboardPageTitle} />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageBlogs"
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
