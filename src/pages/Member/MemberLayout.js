import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const MemberLayout = () => {
  const { isLoggedIn, current } = useSelector((state) => state.user);
  if (!isLoggedIn || !current) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div>
      <div>MemberLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MemberLayout;
