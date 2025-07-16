import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import BlogDetail from "./pages/BlogDetail";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
