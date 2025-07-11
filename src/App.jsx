import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import RightSidebar from "./components/Rightsidebar";
import { ThemeProvider, ThemeContext } from "./assets/store/Themecontext";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import "./App.css";

const MainContent = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className="mainContent"
      style={{
        backgroundColor: darkMode ? "#120f2d" : "#fff",
        color: darkMode ? "white" : "black",
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="layoutWrapper">
          <Sidebar />
          <div className="mainArea">
            <Topbar />
            <MainContent />
          </div>
          <RightSidebar />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
