import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import ForUsers from "./components/ForUsers/ForUsers";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import AboutUs from "./components/AboutUs/AboutUs";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import OverView from "./components/Dashboard/Overview";
import Contact from "./components/Contacts/Contacts";
import Listings from "./components/Listings/Listings";
import Message from "./components/message/Message";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import "./index.css";
import Profile from "./components/Dashboard/Profile";
import UserProfile from "./components/UserProfile/UserProfile";
import SignUp from "./components/SignUp/SignUp";
import CreateCompany from "./components/CreateCompany/CreateCompany";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AdminPage from "./components/adminpage/AdminPage";
import AdminUsers from "./components/adminUsers/AdminUsers";
import AdminCompanies from "./components/adminCompanies/AdminCompanies";

function App() {
  const location = useLocation();
  const showHeader = ![
    "/listings",
    "/contact",
    "/messages",
    "/dashboard",
    "/signup",
    "/signin",
    "/createCompany",
    "/payment",
  ].some((path) => location.pathname.startsWith(path));

  return (
    <div className="app-container">
      {showHeader && <Header />}
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
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="listings/overview" element={<OverView />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createCompany" element={<CreateCompany />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route path="/admincompanies" element={<AdminCompanies />} />
          <Route
            path="/dashboard/*"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <Contact />
              </div>
            }
          />
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
          <Route
            path="/dashboard/me"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <UserProfile />
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
