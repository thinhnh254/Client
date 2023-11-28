import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components";

const AdminLayout = () => {
  const { isLoggedIn, current } = useSelector((state) => state.user);
  if (!isLoggedIn || !current || +current.role !== 0) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return (
    <div className="flex w-full bg-orange-400 min-h-screen relative text-white">
      <div className="w-[327px] top-0 bottom-0 flex-none fixed">
        <AdminSidebar />
      </div>
      <div className="w-[327px]"></div>
      <div className="flex-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
