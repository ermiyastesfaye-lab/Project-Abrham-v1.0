import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Profile from "./components/Profile/Profile";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <Testimonials />
                <ForUsers />
                <HowItWorks />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUpFlow />} />
          <Route
            path="/dashboard/*"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/listings"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Listings />
              </div>
            }
          />
          <Route
            path="/messages"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Message />
              </div>
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/dashboard/profile"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Profile />
              </div>
            }
          />
          // In App.jsx
          <Route
            path="/dashboard/*"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
