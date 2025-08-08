import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-pro";
import "./App.css";
import Landing from "./pages/Landing";
import BlogDetail from "./pages/BlogDetail";
import SEO from "./components/SEO";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
