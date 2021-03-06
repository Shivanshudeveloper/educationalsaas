import React, { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import Reports from "views/dashboard/Observation/Reports";
import Forms from "views/dashboard/Observation/Forms";
import Categories from "views/dashboard/Observation/Categories";
import Level from "views/dashboard/Classes/Level";
import List from "views/dashboard/Classes/List";
import NotesList from "views/dashboard/Notes/NotesList";
import Subjects from "views/dashboard/Classes/Subjects";
import ClassesReports from "views/dashboard/Classes/Reports";
import ReportSubject from "views/dashboard/Classes/ReportSubject";
import TeacherList from "views/dashboard/Teachers/List";
import ObserverReport from "views/dashboard/Observers/Reports";
import ObserverList from "views/dashboard/Observers/List";
import ObserverListAll from "views/dashboard/Observers/ListAll";
import ObserverAppointments from "views/dashboard/Observers/ObserverAppointments";
import Observer from "views/dashboard/Observers/Observer";
import TrainingReport from "views/dashboard/Training/Reports";
import TrainingList from "views/dashboard/Training/List";
import Trainer from "views/dashboard/Training/Trainer";
import { Navigate } from "react-router-dom";
import ProfilePage from "views/dashboard/ProfilePage";
import TeacherMainLayout from "views/teacher-dashboard/TeacherMain";
import TeacherReportsLayout from "views/teacher-dashboard/TeacherReports";
// import TeacherMainLayout from "views/dashboard/Teachers/List";
// import TeacherReportsLayout from "views/dashboard/Teachers/Reports";
import CloudRecording from "views/dashboard/Recording/CloudRecording";
import RegisterEvents from "views/dashboard/Recording/RegisterEvents";
import SharedRecordings from "views/dashboard/Recording/SharedRecordings";
import PlansPricing from "views/dashboard/PlansPricing";
import Attendance from "views/dashboard/Others/Attendance";
import AttendeMeeting from "views/pages/AttendeMeeting";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
  lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
  lazy(() => import("views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Navigate to="/pages/login/login3" replace /> },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/dashboard/default",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard/teacher",
      element: <TeacherMainLayout />,
    },
    {
      path: "/dashboard/observation/reports",
      element: <Reports />,
    },
    {
      path: "/dashboard/observation/forms",
      element: <Forms />,
    },
    {
      path: "/dashboard/observation/categories",
      element: <Categories />,
    },
    {
      path: "/dashboard/classes/level",
      element: <Level />,
    },
    {
      path: "/dashboard/classes/list",
      element: <List />,
    },
    {
      path: "/dashboard/classes/reports",
      element: <ClassesReports />,
    },
    {
      path: "/dashboard/classes/subject-report",
      element: <ReportSubject />,
    },
    {
      path: "/dashboard/classes/subjects",
      element: <Subjects />,
    },
    {
      path: "/dashboard/teacher/report",
      element: <TeacherReportsLayout />,
    },
    {
      path: "/dashboard/teacher/list",
      element: <TeacherList />,
    },
    {
      path: "/dashboard/observer/report",
      element: <ObserverReport />,
    },
    {
      path: "/dashboard/observer/list",
      element: <ObserverList />,
    },
    {
      path: "/dashboard/observer/all",
      element: <ObserverListAll />,
    },
    {
      path: "/dashboard/observer/appointments",
      element: <ObserverAppointments />,
    },
    {
      path: "/dashboard/observer/list/:id",
      element: <Observer />,
    },
    {
      path: "/dashboard/training/report",
      element: <TrainingReport />,
    },
    {
      path: "/dashboard/others/sharedrecordings",
      element: <SharedRecordings />,
    },
    {
      path: "/dashboard/others/cloudrecording",
      element: <CloudRecording />,
    },
    {
      path: "/dashboard/others/scheduleevents",
      element: <RegisterEvents />,
    },
    {
      path: "/dashboard/others/attendance",
      element: <Attendance />,
    },
    {
      path: "/dashboard/others/plansandpricing",
      element: <PlansPricing />,
    },
    {
      path: "/dashboard/training/list",
      element: <TrainingList />,
    },
    {
      path: "/dashboard/training/list/:id",
      element: <Trainer />,
    },
    {
      path: "/utils/util-typography",
      element: <UtilsTypography />,
    },
    {
      path: "/utils/util-color",
      element: <UtilsColor />,
    },
    {
      path: "/utils/util-shadow",
      element: <UtilsShadow />,
    },
    {
      path: "/icons/tabler-icons",
      element: <UtilsTablerIcons />,
    },
    {
      path: "/icons/material-icons",
      element: <UtilsMaterialIcons />,
    },
    {
      path: "/dashboard/notes/list",
      element: <NotesList />,
    },
    {
      path: "/sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
