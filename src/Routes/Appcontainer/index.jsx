/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Header from "../../views/layout/Header";
import Sidebar from "../../views/layout/Sidebar";
import ComponentSidebar from "../../components/ComponentSidebar";

import BasicInputs from "../../views/pages/Ui_Interface/Forms/BasicInputs";
import HorizontalForm from "../../views/pages/Ui_Interface/Forms/HorizontalForm";
import VerticalForm from "../../views/pages/Ui_Interface/Forms/VerticalForm";
import Formmask from "../../views/pages/Ui_Interface/Forms/Formmask";
import Formvalidation from "../../views/pages/Ui_Interface/Forms/Formvalidation";
import DataTables from "../../views/pages/Ui_Interface/Tables/DataTables";


import Components from "../../views/pages/Ui_Interface/Components/Components";

import FileUpload from "../../views/pages/Ui_Interface/Forms/FileUpload.jsx";
import Clipboard from "../../views/pages/Ui_Interface/Elements/Clipboard.jsx";
import Dragdrop from "../../views/pages/Ui_Interface/Elements/Dragdrop.jsx";
import Texteditor from "../../views/pages/Ui_Interface/Elements/Texteditor.jsx";
import Counter from "../../views/pages/Ui_Interface/Elements/Counter.jsx";
import Scrollbar from "../../views/pages/Ui_Interface/Elements/Scrollbar.jsx";
import Notification from "../../views/pages/Ui_Interface/Elements/Notification.jsx";
import Formwizard from "../../views/pages/Ui_Interface/Elements/Formwizard.jsx";
import Apexchart from "../../views/pages/Ui_Interface/Charts/Apexcharts.jsx";
import FontAwesomeicons from "../../views/pages/Ui_Interface/Icons/Fontawesomeicons.jsx";
import FeatherIcons from "../../views/pages/Ui_Interface/Icons/Feathericons.jsx";
import IonicIcon from "../../views/pages/Ui_Interface/Icons/Ionicicons.jsx";
import MaterialIcons from "../../views/pages/Ui_Interface/Icons/Materialicons.jsx";
import Pe7Icon from "../../views/pages/Ui_Interface/Icons/Pe7icons.jsx";
import SimpleLine from "../../views/pages/Ui_Interface/Icons/Simpleicons.jsx";
import Themifyicons from "../../views/pages/Ui_Interface/Icons/Themifyicons.jsx";
import WeatherIcons from "../../views/pages/Ui_Interface/Icons/Weathericons.jsx";
import Typicons from "../../views/pages/Ui_Interface/Icons/Typicons.jsx";
import FlagIcons from "../../views/pages/Ui_Interface/Icons/Flagicons.jsx";
import Courses from "../../views/pages/course_managment/courses/Courses.jsx";
import CourseDetails from "../../views/pages/course_managment/courses/CourseDetails.jsx";

import SubCategory from "../../views/pages/course_managment/categories/subCategory.jsx";
import SubCategoriesPage from "../../views/pages/course_managment/categories/SubCategoriesPage.jsx";
import Categories from "../../views/pages/course_managment/categories/Categories.jsx";
import Students from "../../views/pages/user_managment/students/Students.jsx";
import Instructors from "../../views/pages/user_managment/instructors/Instructors.jsx";
import Holidays from "../../views/pages/holidays/Holidays.jsx";
import Policies from "../../views/pages/policies/Policies.jsx";
import Leaves from "../../views/pages/leaves/Leaves.jsx";
import Profile from "../../views/pages/Profile/Profile.jsx";
import ScheduleTiming from "../../views/pages/ScheduleTiming/index.jsx";
import DraftCourses from "../../views/pages/course_managment/courses/DraftCousres.jsx";
import Permissions from "../../views/pages/permissions/Permissions.jsx";
import TeachingHours from "../../views/pages/teaching-hours/TeachingHours.jsx";
import CommunitySettings from "../../views/pages/community_settings/CommunitySettings";
import SupportTickets from "../../views/pages/support_tickets/SupportTickets.jsx";
const AppContainer = () => {
  useEffect(() => {
    localStorage.setItem("colorschema", "orange");
    localStorage.setItem("layout", "vertical");
    localStorage.setItem("layoutwidth", "fixed");
    localStorage.setItem("layoutpos", "fluid");
    localStorage.setItem("topbartheme", "light");
    localStorage.setItem("layoutSized", "lg");
    localStorage.setItem("layoutStyling", "default");
    localStorage.setItem("layoutSidebarStyle", "dark");
  }, []);

  const routingObjects = [
    
    {
      id: 1,
      path: "form-basic-inputs",
      element: <BasicInputs />,
    },
    {
      id: 3,
      path: "form-horizontal",
      element: <HorizontalForm />,
    },
    {
      id: 4,
      path: "form-vertical",
      element: <VerticalForm />,
    },
    {
      id: 5,
      path: "form-mask",
      element: <Formmask />,
    },
    {
      id: 6,
      path: "form-validation",
      element: <Formvalidation />,
    },
   
    {
      id: 8,
      path: "data-tables",
      element: <DataTables />,
    },

    {
      id: 92,
      path: "file-upload",
      element: <FileUpload />,
    },
   
    {
      id: 94,
      path: "clipboard",
      element: <Clipboard />,
    },
    {
      id: 95,
      path: "dragdrop",
      element: <Dragdrop />,
    },
    
    {
      id: 97,
      path: "text-editor",
      element: <Texteditor />,
    },
    {
      id: 98,
      path: "counter",
      element: <Counter />,
    },
    {
      id: 99,
      path: "scrollbar",
      element: <Scrollbar />,
    },
    {
      id: 100,
      path: "notification",
      element: <Notification />,
    },
    
    

    {
      id: 103,
      path: "form-wizard",
      element: <Formwizard />,
    },
    {
      id: 104,
      path: "apex-charts",
      element: <Apexchart />,
    },
    
   
    {
      id: 110,
      path: "fontawesome-icons",
      element: <FontAwesomeicons />,
    },
    {
      id: 111,
      path: "feather-icons",
      element: <FeatherIcons />,
    },
    {
      id: 112,
      path: "ionic-icons",
      element: <IonicIcon />,
    },
    {
      id: 113,
      path: "material-icons",
      element: <MaterialIcons />,
    },
    {
      id: 114,
      path: "pe7-icons",
      element: <Pe7Icon />,
    },
    {
      id: 115,
      path: "simpleline-icons",
      element: <SimpleLine />,
    },
    {
      id: 116,
      path: "themify-icons",
      element: <Themifyicons />,
    },
    {
      id: 117,
      path: "weather-icons",
      element: <WeatherIcons />,
    },
    {
      id: 118,
      path: "typicons",
      element: <Typicons />,
    },
    {
      id: 119,
      path: "flag-icons",
      element: <FlagIcons />,
    },
    {
      
      id:120,
      path:"courses",
      element:<Courses/>
    },
    {
      id: 121,
      path: "categories",
      element: <Categories />,
      children: [
        {
          id: 125,
          path: ":id/sub-categories",  // Relative path, no leading "/"
          element: <SubCategoriesPage />
        }
      ]
    },
    {
      id:123,
      path:"courses/:id",
      element:<CourseDetails/>
    },
    {
      id:124,
      path:"sub-category",
      element:<SubCategory/>
    },
    {
      id:130,
      path:"students",
      element:<Students/>
    }
    ,
    {
      id:131,
      path:"instructors",
      element:<Instructors/>
    },
    {
      id:132,
      path:"holidays",
      element:<Holidays/>
    },
    {
      id:133,
      path:"policies",
      element:<Policies/>
    },
    {
      id:134,
      path:"leaves",
      element:<Leaves/>
    },
    {id:135,
    path:"profile",
    element:<Profile/>},
    {
      id:136,
      path:"schedule",
      element:<ScheduleTiming/>
    },
    {
      id:137,
      path:"courses/drafts",
      element:<DraftCourses/>
    },
    {
      id:138,
      path:"permissions",
      element:<Permissions/>
    },
    {
      id:139,
      path:"teaching-hours",
      element:<TeachingHours/>
    },
    {
      id:140,
      path:"community-settings",
      element:<CommunitySettings/>
    },
    {
      id:141,
      path:"support-tickets",
      element:<SupportTickets/>
    }
  ];


  const ComponentsRoutingeObjects = [
    {
      id: 1,
      path: "components",
      element: <Components />,
    },
  ];


  
 
  const SidebarLayout = () => (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
  const AuthendicationLayout = () => (
    <div>
      
    </div>
  );
  const ChatSidebarLayout = () => (
    <>
      <Header />
      {/* <ChatSidebar /> */}
      <Outlet />
    </>
  );
  const ComponentSidebarLayout = () => (
    <>
      <Header />
      <ComponentSidebar />
      <Outlet />
    </>
  );
  const EmailSidebarLayout = () => (
    <>
      <Header />
      <Outlet />
      
    </>
  );
  const SettingsSidebarLayout = () => (
    <>
      <Header />
      {/* <SettingsSidebar /> */}
      <Outlet />
    </>
  );
  const ProjectSidebarLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  const mobileResponsive = (event) => {
    const excludedHeader = document.querySelector(".header");
    const excludedSidebar = document.querySelector(".sidebar");

    if (
      !excludedHeader.contains(event.target) &&
      !excludedSidebar.contains(event.target)
    ) {
      document.body.classList.remove("slide-nav");
    }
  };

  return (
    <>
      <div className="main-wrapper" onClick={mobileResponsive}>
        <Routes>
          <Route path={"/*"} element={<SidebarLayout />}>
            {routingObjects.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Route>
          {/* <Route path={"/*"} element={<ComponentSidebarLayout />}>
            {ComponentsRoutingeObjects.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Route> */}
        
       
          
          <Route path={"/*"} element={<SidebarLayout />}>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppContainer;
