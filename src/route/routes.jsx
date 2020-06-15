import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default [
  {
    path: "/",
    exact: true,
    layout: MainLayout,
    component: Home,
  },
  {
    path: "/me",
    exact: true,
    layout: MainLayout,
    component: Profile,
  },
  {
    path: "/edit-profile",
    exact: true,
    layout: MainLayout,
    component: Profile,
  },
];
