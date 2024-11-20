import React from "react";
import MetricsCard from "../Components_admin/MetricsCard";
import Sidebar from "../Components_admin/Sidebar";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import "../CSS/AdminDashbord.css"

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content p-4">
        <h1 className="mb-4">Admin Dashboard</h1>
        <div className="d-flex justify-content-around">
          <MetricsCard title="Total Books" value="120" icon={faBook} />
          <MetricsCard title="Total Users" value="50" icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
