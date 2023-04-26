import React from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Reports,
  Team,
  Projects,
  Dashboard,
  Documents,
  Topbar,
} from "./index";

const AdminContent = () => {
  let { id } = useParams();
  return (
    <div>
      {/* <div style={{ fontSize: "20px" }}>Now showing post {id}</div> */}
      <div className="sticky top-0">
        <Topbar />
      </div>
      <div
        className={`md:px-8 px-4 border-dashed border-2 border-indigo-600 rounded-md mx-4`}
      >
        {id == "calendar" && <Calendar />}
        {id == "dashboard" && <Dashboard />}
        {id == "reports" && <Reports />}
        {id == "document" && <Documents />}
        {id == "team" && <Team />}
        {id == "projects" && <Projects />}
      </div>
    </div>
  );
};

export default AdminContent;
