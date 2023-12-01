import clsx from "clsx";
import React, { Fragment, memo, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/icon-user.png";
import { memberSidebar } from "../../ultils/contants";

const activedStyle = "px-4 py-2 flex items-center gap-2 bg-gray-300";
const notActivedStyle = "px-4 py-2 flex items-center gap-2 hover:bg-gray-200";

const MemberSidebar = () => {
  const [actived, setActived] = useState([]);
  const { current } = useSelector((state) => state.user);
  console.log(current);
  const handleShowTabs = (tabID) => {
    if (actived.some((el) => el === tabID)) {
      setActived((prev) => prev.filter((el) => el !== tabID));
    } else {
      setActived((prev) => [...prev, tabID]);
    }
  };
  return (
    <div className="bg-white h-full py-4 w-[250px] flex-none">
      <div className="w-full flex flex-col items-center justify-center py-4">
        <img
          src={current?.avatar || avatar}
          alt="logo"
          className="w-16 h-16 object-cover"
        />

        <small className="text-black">{`${current?.lastname} ${current?.firstname}`}</small>
      </div>

      <div>
        {memberSidebar.map((el) => (
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
                          onClick={(e) => e.stopPropagation()}
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

export default memo(MemberSidebar);
