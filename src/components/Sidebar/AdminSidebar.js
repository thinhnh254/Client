import clsx from "clsx";
import React, { Fragment, memo, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { adminSidebar } from "../../ultils/contants";

const activedStyle = "px-4 py-2 flex items-center gap-2 bg-gray-300";
const notActivedStyle = "px-4 py-2 flex items-center gap-2 hover:bg-gray-200";

const AdminSidebar = () => {
  const [actived, setActived] = useState([]);
  console.log(actived);
  const handleShowTabs = (tabID) => {
    if (actived.some((el) => el === tabID)) {
      setActived((prev) => prev.filter((el) => el !== tabID));
    } else {
      setActived((prev) => [...prev, tabID]);
    }
  };
  return (
    <div className="bg-white h-full py-4">
      <div className="flex flex-col justify-center items-center p-4 gap-2">
        <img src={logo} alt="logo" className="w-[200px] object-contain" />
        <small className="text-black">Admin Workspace</small>
      </div>

      <div>
        {adminSidebar.map((el) => (
          <NavLink className="text-orange-600">
            <Fragment key={el.id}>
              {el.type === "SINGLE" && (
                <NavLink
                  to={el.path}
                  className={({ isActive }) =>
                    clsx(isActive && activedStyle, !isActive && notActivedStyle)
                  }
                >
                  <span>{el.icon}</span>
                  <span>{el.text}</span>
                </NavLink>
              )}
              {el.type === "PARENT" && (
                <div
                  className="flex flex-col"
                  onClick={() => handleShowTabs(+el.id)}
                >
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span>{el.icon}</span>
                      <span>{el.text}</span>
                    </div>
                    {actived.some((id) => id === el.id) ? (
                      <FaAnglesDown />
                    ) : (
                      <FaAngleDoubleRight />
                    )}
                  </div>

                  {actived.some((id) => id === +el.id) && (
                    <div className="flex flex-col">
                      {el.submenu.map((item) => (
                        <NavLink
                          key={el.text}
                          to={item.path}
                          onClick={e => e.stopPropagation()}
                          className={({ isActive }) =>
                            clsx(
                              isActive && activedStyle,
                              !isActive && notActivedStyle,
                              "pl-10"
                            )
                          }
                        >
                          {item.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default memo(AdminSidebar);
