import React, { useEffect } from "react";
import { getAllUsers } from "../../apis/user";

const ManageUsers = () => {
  const fetchUsers = async (params) => {
    const response = await getAllUsers(params);
    console.log(response);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b border-white">
        <span>Manage users</span>
      </h1>
      <div>
        <table>
          <thead>
            <th>#</th>
            <th>#</th>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
