import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { getCategories } from "./store/asyncActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
