import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AdminLayout,
  CreateProducts,
  Dashboard,
  ManageOrder,
  ManageProducts,
  ManageUsers,
} from "./pages/Admin";
import { MemberLayout, Personal } from "./pages/Member";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { routes } from "./routes";
import { getCategories } from "./store/app/asyncActions";
import path from "./ultils/path";

function App() {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Router>
        {/* {isShowModal && <Modal>{modalChildren}</Modal>} */}
        <ToastContainer />
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path={path.ADMIN} element={<AdminLayout />}>
            <Route path={path.DASHBOARD} element={<Dashboard />} />
            <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
            <Route path={path.MANAGE_PRODUCTS} element={<ManageProducts />} />
            <Route path={path.MANAGE_USERS} element={<ManageUsers />} />
            <Route path={path.CREATE_PRODUCTS} element={<CreateProducts />} />
          </Route>
          <Route path={path.MEMBER} element={<MemberLayout />}>
            <Route path={path.PERSONAL} element={<Personal />} />
          </Route>
          <Route path={path.ALL} element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
