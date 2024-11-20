import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import ForUsers from "./components/ForUsers/ForUsers";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import Sidebar from "./components/Sidebar/Sidebar";
import SignUpFlow from "./components/SignupFlow/SignupFlow";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/Contacts/Contacts";
import Listings from "./components/Listings/Listings";
import Message from "./components/message/Message";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import Profile from "./components/Dashboard/Profile";
import "./index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      {!isAuthenticated && <Header />}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <>
                  <Hero />
                  <AboutUs />
                  <Testimonials />
                  <ForUsers />
                  <HowItWorks />
                  <Footer />
                </>
              )
            }
          />
          <Route
            path="/signin"
            element={<SignIn onSignIn={handleAuthentication} />}
          />
          <Route
            path="/signup"
            element={<SignUpFlow onSignUp={handleAuthentication} />}
          />
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar />
                  <Dashboard />
                </div>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/listings"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar />
                  <Listings />
                </div>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/messages"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar />
                  <Message />
                </div>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/payment"
            element={
              isAuthenticated ? (
                <PaymentPage />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              isAuthenticated ? (
                <div className="dashboard-layout">
                  <Sidebar />
                  <Profile />
                </div>
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
