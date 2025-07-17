export const SidebarData = [
  {
    tittle: 'ADMIN',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Profile",
        hasSubRoute: false,
        showSubRoute: false,
        avatar: "/img/avatar.jpg", // You can use any icon you prefer
        route: "/profile"
      }
    ]
  }
  ,{
    tittle: 'MAIN',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Dashboard",
        hasSubRoute: false,
        showSubRoute: false,
        icon: "la la-dashboard",
        
      }
    ]
  },
  {
    tittle: 'COURSE MANAGEMENT',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Courses",
        hasSubRoute: true,
        showSubRoute: false,
        icon: "la la-book",
        route: "/courses",
        subMenus: [
          {
            menuValue: "All Courses",
            route: "/courses",
            icon: "la la-list"
          },
          {
            menuValue: "Draft Courses",
            route: "/courses/drafts",
            icon: "la la-pencil-alt"
          },
          {
            menuValue: "Public SCORM Modules",
            route: "/courses/public-scorm",
          }
        ]
      },
      {
        menuValue: "Categories",
        hasSubRoute: false,
        showSubRoute: false,
        icon: "la la-list-alt",
        route: "/categories"
      },
      {
        menuValue: "File Manager",
        hasSubRoute: false,
        showSubRoute: false,
        icon: "la la-folder-open",
        route: "/file-manager"
      }
    ]
  }
  ,
  {
    tittle: 'USER MANAGEMENT',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Instructors",
        hasSubRoute: true,
        showSubRoute: false,
        icon: "la la-chalkboard-teacher",
        route: "/instructors",
        subMenus:[
          {
            menuValue:"Leaves",
            route:"/leaves",
          },
          {
            menuValue:"Time Schedule",
            route:"/schedule",

          },
          {
            menuValue:"Instructors",
            route:"/instructors",
          },
          {
            menuValue:"Permissions",
            route:"/permissions"
          },
          {
            menuValue:"Teaching Hours",
            route:"/teaching-hours"
          }
        ]
      },
      {
        menuValue: "Students",
        hasSubRoute: false,
        showSubRoute: false,
        icon: "la la-user-graduate",
        route: "/students"
      },
      
    ]
  },
  {
    tittle: 'ANNOUNCEMENTS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Announcements",
        hasSubRoute: false,
        showSubRoute: false,
        icon: "la la-bullhorn",
        route: "/announcements"
      }
    ]
  },
  {
    tittle: 'SETTINGS',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: "Platform Settings",
        hasSubRoute: true,
        showSubRoute: false,
        icon: "la la-cogs",
        route: "/platform-settings",
        subMenus:[
          {
            menuValue:"Community Settings",
            route:"/community-settings",
          },
          {
            menuValue:"Support",
            route:"/support-tickets",
          },
          {
            menuValue:"Policies",
            route:"/policies",
            icon:"las la-file-alt"
          },
          {
            menuValue:"Holidays",
            route:"/holidays",
            icon:"las la-umbrella-beach"
          }
        ]
      }
    ]
  },
  // {
  //   tittle: 'UI INTERFACE',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //     {
  //       menuValue: "Base UI",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "lab la-uikit",
  //       subMenus: [
  //         { menuValue: "Alerts", route: "/alerts" },
  //         { menuValue: "Accordion", route: "/accordion" },
  //         { menuValue: "Avatar", route: "/avatar" },
  //         { menuValue: "Badges", route: "/badges" },
  //         { menuValue: "Border", route: "/borders" },
  //         { menuValue: "Buttons", route: "/buttons" },
  //         { menuValue: "Button Group", route: "/buttongroup" },
  //         { menuValue: "Breadcrumb", route: "/breadcrumb" },
  //         { menuValue: "Card", route: "/cards" },
  //         { menuValue: "Carousel", route: "/carousel" },
  //         { menuValue: "Colors", route: "/colors" },
  //         { menuValue: "Dropdowns", route: "/dropdowns" },
  //         { menuValue: "Images", route: "/images" },
  //         { menuValue: "Lightbox", route: "/lightbox" },
  //         { menuValue: "Media", route: "/media" },
  //         { menuValue: "Modals", route: "/modals" },
  //         { menuValue: "Notification", route: "/notification" },
  //         { menuValue: "Offcanvas", route: "/offcanvas" },
  //         { menuValue: "Pagination", route: "/pagination" },
  //         { menuValue: "Popovers", route: "/popover" },
  //         { menuValue: "Progress", route: "/progress" },
  //         { menuValue: "Placeholders", route: "/placeholders" },
  //         { menuValue: "Range Slider", route: "/rangeslider" },
  //         { menuValue: "Spinner", route: "/spinner" },
  //         { menuValue: "Sweet Alerts", route: "/sweetalert" },
  //         { menuValue: "Toasts", route: "/toastr" },
  //         { menuValue: "Typography", route: "/typography" },
  //         { menuValue: "Video", route: "/video" }
  //       ]
  //     },
  //     {
  //       menuValue: "Advanced UI",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-eject",
  //       subMenus: [
  //         { menuValue: "Clipboard", route: "/clipboard" },
  //         { menuValue: "Drag & Drop", route: "/dragdrop" },
  //         { menuValue: "Range Slider", route: "/rangeslider" },
  //         { menuValue: "Text Editor", route: "/text-editor" },
  //         { menuValue: "Counter", route: "/counter" },
  //         { menuValue: "Scrollbar", route: "/scrollbar" }
  //       ]
  //     },
  //     {
  //       menuValue: "Charts",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-chart-line",
  //       subMenus: [
  //         { menuValue: "Apex Charts", route: "/apex-charts" }
  //       ]
  //     },
  //     {
  //       menuValue: "Icons",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-icons",
  //       subMenus: [
  //         { menuValue: "Fontawesome Icons", route: "/fontawesome-icons" },
  //         { menuValue: "Feather Icons", route: "/feather-icons" },
  //         { menuValue: "Ionic Icons", route: "/ionic-icons" },
  //         { menuValue: "Material Icons", route: "/material-icons" },
  //         { menuValue: "Pe7 Icons", route: "/pe7-icons" },
  //         { menuValue: "Simpleline Icons", route: "/simpleline-icons" },
  //         { menuValue: "Themify Icons", route: "/themify-icons" },
  //         { menuValue: "Weather Icons", route: "/weather-icons" },
  //         { menuValue: "Typicon Icons", route: "/typicons" },
  //         { menuValue: "Flag Icons", route: "/flag-icons" }
  //       ]
  //     },
      
  //     {
  //       menuValue: "Forms",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-wpforms",
  //       subMenus: [
  //         { menuValue: "Basic Inputs", route: "/form-basic-inputs" },
  //         { menuValue: "Form Mask", route: "/form-mask" },
  //         { menuValue: "Form Validation", route: "/form-validation" },
  //         { menuValue: "File Upload", route: "/file-upload" },
  //         { menuValue: "Form Wizard", route: "/form-wizard" }
  //       ]
  //     },
  //     {
  //       menuValue: "Tables",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-table",
  //       subMenus: [
  //         { menuValue: "Data Table", route: "/data-tables" }
  //       ]
  //     }
  //   ]
  // }
];
