import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import DetailsCart from "../pages/DetailsCart/DetailsCart";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Checkout from "../pages/Member/Checkout";
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
    path: "/cart",
    page: DetailsCart,
  },
  {
    path: "/checkout",
    page: Checkout,
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
    path: "/contact",
    page: ContactPage,
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
