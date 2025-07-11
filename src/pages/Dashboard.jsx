import React from "react";
import Welcome from "../components/Welcome";
import BarChart from "../components/Barchart";
import CoursesSection from "../components/CoursesSection.jsx";

const Dashboard = () => {
  return (
    <>
      <Welcome />
      <BarChart />
      <CoursesSection />
    </>
  );
};

export default Dashboard;
