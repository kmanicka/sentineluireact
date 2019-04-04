// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Alert from "@material-ui/icons/Language";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewViolations from "views/NewViolations/NewViolations.jsx";
import KnownViolations from "views/KnownViolations/KnownViolations.jsx";
import ConnectionCheck from "views/ConnectionCheck/ConnectionCheck.jsx";
import RestorePolicies from "views/RestorePolicies/RestorePolicies.jsx";
import CriticalApplications from "views/CriticalApplications/CriticalApplications.jsx";
import Users from "views/Users/Users.jsx";

//import TableList from "views/TableList/TableList.jsx";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
//import NotificationsPage from "views/Notifications/Notifications.jsx";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/newviolations",
    name: "New Violations",
    icon: Notifications,
    component: NewViolations,
    layout: "/admin"
  },
  {
    path: "/knownviolations",
    name: "Known Violations",
    icon: Notifications,
    component: KnownViolations,
    layout: "/admin"
  },
  {
    path: "/connectioncheck",
    name: "Connection Check",
    icon: Alert,
    component: ConnectionCheck,
    layout: "/admin"
  },
  {
    path: "/restorepolicies",
    name: "Restore Policies",
    icon: Unarchive,
    component: RestorePolicies,
    layout: "/admin"
  },
  {
    path: "/criticalapplications",
    name: "Critical Applications",
    icon: LibraryBooks,
    component: CriticalApplications,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Users,
    layout: "/admin"
  },
/*  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  } */
];

export default dashboardRoutes;
