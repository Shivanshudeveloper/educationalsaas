// assets
import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons";

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    // {
    //   id: "observation",
    //   title: "Observation",
    //   type: "collapse",
    //   icon: icons.IconKey,
    //   children: [
    //     {
    //       id: "default21",
    //       title: "Reports",
    //       type: "item",
    //       url: "/dashboard/observation/reports",
    //       //   target: true,
    //     },
    //     {
    //       id: "default22",
    //       title: "Observation forms",
    //       type: "item",
    //       url: "/dashboard/observation/forms",
    //       //   target: true,
    //     },
    //     {
    //       id: "default23",
    //       title: "Categories",
    //       type: "item",
    //       url: "/dashboard/observation/categories",
    //       //   target: true,
    //     },
    //   ],
    // },
    {
      id: "classes",
      title: "Classes",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "default32",
          title: "Classes",
          type: "item",
          url: "/dashboard/classes/list",
          //   target: true,
        },
        {
          id: "default32",
          title: "Subjects",
          type: "item",
          url: "/dashboard/classes/subjects",
          //   target: true,
        }
      ],
    },
    {
      id: "notes",
      title: "Notes",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "default32",
          title: "Notes list",
          type: "item",
          url: "/dashboard/notes/list",
          //   target: true,
        }
      ],
    },

  ],
};

export default dashboard;
