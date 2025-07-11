import React from "react";
import WelcomeCard from "../components/Welcomecard";
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
