import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Messenger from "../pages/Messenger";
import composedMessengerHOC from "../pages/Messenger";

export default [
  {
    path: "/",
    exact: true,
    layout: MainLayout,
    component: Home,
  },
  // {
  //   path: "/me",
  //   exact: true,
  //   layout: MainLayout,
  //   component: Profile,
  // },
  {
    path: "/edit-profile",
    exact: true,
    layout: MainLayout,
    component: Profile,
  },
  {
    path: "/profile/:username",
    exact: true,
    layout: MainLayout,
    component: Profile,
  },
  {
    path: "/register",
    exact: true,
    layout: MainLayout,
    component: Registration,
  },
  {
    path: "/login",
    exact: true,
    layout: MainLayout,
    component: Login,
  },
  {
    path: "/messenger",
    exact: true,
    layout: MainLayout,
    component: Messenger,
  },
];
