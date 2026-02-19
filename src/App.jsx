import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LatestPage from "./pages/LatestPage";
import ParentsInfo from "./pages/ParentsInfo";
import LoginPage from "./pages/LoginPage";
import PostUploadPage from "./pages/PostUploadPage";
import PrivateRoute from "./pages/PrivateRoute";
import GreenFlagPage from "./pages/GreenFlagPage";
import PolicyPage from "./pages/PolicyPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import PostDetail from "./pages/PostDetail";
import LastManStandingPage from "./pages/LastManStandingPage";

function App() {
  return (
    <div className="page-shell">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#102a4a]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/parents-information" element={<ParentsInfo />} />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/green-flag" element={<GreenFlagPage />} />
          <Route path="/policies" element={<PolicyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/last-man-standing" element={<LastManStandingPage />} />
          <Route
            path="/post-upload"
            element={
              <PrivateRoute>
                <PostUploadPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
