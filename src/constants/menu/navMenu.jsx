import { AiOutlineHome, AiFillCaretDown } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiBriefcaseLine } from "react-icons/ri";
import {
  MdMessage,
  MdNotificationsNone,
  MdOndemandVideo,
} from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default [
  {
    label: "Home",
    icon: AiOutlineHome,
    to: "/",
  },
  {
    label: "My Network",
    to: "/",
    icon: FiUsers,
  },
  {
    label: "Jobs",
    icon: RiBriefcaseLine,
    to: "/",
  },
  {
    label: "Messaging",
    icon: MdMessage,
    to: "/",
  },
  {
    label: "Notifications",
    to: "/",
    icon: MdNotificationsNone,
  },
  {
    label: "Me",
    to: "/profile/me",
    secondaryIcon: AiFillCaretDown,
  },
  {
    label: "Work",
    to: "/",
    icon: BsFillGrid3X3GapFill,
    secondaryIcon: AiFillCaretDown,
  },
  {
    label: "Learning",
    to: "/",
    icon: MdOndemandVideo,
  },
];
