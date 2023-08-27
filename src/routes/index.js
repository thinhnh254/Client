import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
import ShopPage from "../pages/ShopPage/ShopPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/shop",
    page: ShopPage,
    isShowHeader: true,
  },
  {
    path: "/about",
    page: AboutPage,
    isShowHeader: true,
  },
  {
    path: "/review",
    page: ReviewPage,
    isShowHeader: true,
  },
  {
    path: "/blog",
    page: BlogPage,
    isShowHeader: true,
  },
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/register",
    page: RegisterPage,
  },
  {
    path: "/*",
    page: NotFoundPage,
  },
];
