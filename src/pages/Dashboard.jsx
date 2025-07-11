import React from "react";
import Welcome from "../components/Welcome";
import BarChart from "../components/Barchart";
import CoursesSection from "../components/CoursesSection";

const Dashboard = () => {
  return (
    <>
      <WelcomeCard />
      <BarChart />
      <CoursesSection />
    </>
  );
};

export default Dashboard;
