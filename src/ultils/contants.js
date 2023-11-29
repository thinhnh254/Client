import icons from "./icons";
import path from "./path";

const { RxDashboard, HiMiniUserGroup, FaBoxOpen, MdManageSearch } = icons;
export const adminSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Dashboard",
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icon: <RxDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Manage users",
    path: `/${path.ADMIN}/${path.MANAGE_USERS}`,
    icon: <HiMiniUserGroup size={20} />,
  },
  {
    id: 3,
    type: "PARENT",
    text: "Manage products",
    icon: <FaBoxOpen size={20} />,
    submenu: [
      {
        text: "Create product",
        path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`,
      },
      {
        text: "Manage product",
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}`,
      },
    ],
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Manage orders",
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icon: <MdManageSearch size={20} />,
  },
];

export const roles = [
  {
    code: 0,
    value: "Admin",
  },
  {
    code: 1,
    value: "User",
  },
];

export const blockStatus = [
  {
    code: true,
    value: "Blocked",
  },
  {
    code: false,
    value: "Active",
  },
];
