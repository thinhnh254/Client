import clsx from "clsx";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { deleteUser, getAllUsers, updateUsers } from "../../apis/user";
import {
  Button,
  InputField,
  InputForm,
  Pagination,
  Select,
} from "../../components";
import useDebounce from "../../hooks/useDebounce";
import { blockStatus, roles } from "../../ultils/contants";

const ManageUsers = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    email: "",
    firstname: "",
    lastname: "",
    role: "",
    phone: "",
    isBlocked: "",
  });
  const [users, setUsers] = useState(null);
  const [queries, setQueries] = useState({ q: "" });
  const [editElm, setEditElm] = useState(null);
  const [update, setUpdate] = useState(false);
  const [params] = useSearchParams();

  const fetchUsers = async (params) => {
    const response = await getAllUsers({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (response.success) {
      setUsers(response);
    }
  };

  const render = useCallback(() => {
    setUpdate(!update);
  }, [update]);
  const queriesDebounce = useDebounce(queries.q, 800);
  useEffect(() => {
    const queries = Object.fromEntries([...params]);
    if (queriesDebounce) queries.q = queriesDebounce;
    fetchUsers(queries);
  }, [queriesDebounce, params, update]);

  const handleUpdate = async (data) => {
    const response = await updateUsers(data, editElm._id);
    if (response.success) {
      setEditElm(null);
      render();
      toast.success(response.mes);
    } else {
      toast.error(response.mes);
    }
  };

  const handleDeleteUser = (uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Ready remove this user?",
      showCancelButton: true,
    }).then(async (rs) => {
      if (rs.isConfirmed) {
        const response = await deleteUser(uid);
        if (response.success) {
          render();
          toast.success(response.mes);
        } else {
          toast.error(response.mes);
        }
      }
    });
  };

  useEffect(() => {
    if (editElm) {
      reset({
        email: editElm.email,
        firstname: editElm.firstname,
        lastname: editElm.lastname,
        role: editElm.role,
        phone: editElm.mobile,
        isBlocked: editElm.isBlocked,
      });
    }
  }, [editElm]);

  return (
    <div className={clsx("w-full", editElm && "pl-16")}>
      <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b border-white">
        <span>Manage users</span>
      </h1>

      <div className="w-full p-4">
        <div className="flex justify-end py-4">
          <InputField
            className="text-black"
            nameKey={"q"}
            value={queries.q}
            setValue={setQueries}
            placeholder="Search..."
            isHideLabel
          />
        </div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          {editElm && <Button type="submit">Submit</Button>}
          <table className="table-auto mb-6 text-left w-full">
            <thead className="font-bold bg-gray-700 text-[13px]">
              <tr className="border border-gray-500">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Email address</th>
                <th className="px-4 py-2">First name</th>
                <th className="px-4 py-2">Last name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Create At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.users?.map((el, index) => (
                <tr key={el._id} className="border border-gray-500 text-black">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <InputForm
                        register={register}
                        fullWidth
                        defaultValue={editElm?.email}
                        errors={errors}
                        id={"email"}
                        validate={{
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        }}
                      />
                    ) : (
                      <span>{el.email}</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <InputForm
                        register={register}
                        fullWidth
                        defaultValue={editElm?.firstname}
                        errors={errors}
                        id={"firstname"}
                        validate={{ required: "Require fill" }}
                      />
                    ) : (
                      <span>{el.firstname}</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <InputForm
                        register={register}
                        fullWidth
                        defaultValue={editElm?.lastname}
                        errors={errors}
                        id={"lastname"}
                        validate={{ required: "Require fill" }}
                      />
                    ) : (
                      <span>{el.lastname}</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <Select
                        register={register}
                        fullWidth
                        defaultValue={el.role}
                        errors={errors}
                        id={"role"}
                        validate={{ required: "Require fill" }}
                        options={roles}
                      />
                    ) : (
                      <span>
                        {roles.find((role) => +role.code === +el.role)?.value}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <InputForm
                        register={register}
                        fullWidth
                        defaultValue={editElm?.mobile}
                        errors={errors}
                        id={"mobile"}
                        validate={{
                          required: "Require fill",
                          pattern: {
                            value: /^[62|0]+\d{9}/gi,
                            message: "Invalid phone number",
                          },
                        }}
                      />
                    ) : (
                      <span>{el.mobile}</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <Select
                        register={register}
                        fullWidth
                        defaultValue={el.isBlocked}
                        errors={errors}
                        id={"isBlocked"}
                        validate={{ required: "Require fill" }}
                        options={blockStatus}
                      />
                    ) : (
                      <span> {el.isBlocked ? "Blocked" : "Active"}</span>
                    )}
                  </td>

                  <td className="py-2 px-4">
                    {moment(el.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="py-2 px-4">
                    {editElm?._id === el._id ? (
                      <span
                        onClick={() => setEditElm(null)}
                        className="px-2 text-blue-500 hover:underline cursor-pointer"
                      >
                        Back
                      </span>
                    ) : (
                      <span
                        onClick={() => setEditElm(el)}
                        className="px-2 text-blue-500 hover:underline cursor-pointer"
                      >
                        Edit
                      </span>
                    )}
                    <span
                      onClick={() => handleDeleteUser(el._id)}
                      className="px-2 text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
        <div className="w-full flex">
          <Pagination totalCount={users?.counts} />
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
