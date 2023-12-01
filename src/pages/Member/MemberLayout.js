import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import MemberSidebar from "../../components/Sidebar/MemberSidebar";

const MemberLayout = () => {
  const { isLoggedIn, current } = useSelector((state) => state.user);
  if (!isLoggedIn || !current) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="flex">
      <MemberSidebar/>
      <div className="flex-auto bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MemberLayout;
