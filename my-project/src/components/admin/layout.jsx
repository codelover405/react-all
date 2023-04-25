import React from "react";
import { AdminContent, Topbar, Side } from "./index";

const AdminLayout = () => {
  return (
    <div>
      {/* <div className="lg:block hidden sticky top-0">
        <Topbar />
      </div> */}
      <div className="w-full flex divide-x-2">
        <div className="lg:block hidden lg:w-1/5 w-full ">
          <Side />
        </div>
        <div className=" lg:w-4/5 w-screen">
          <AdminContent />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
