import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  useLocation,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
//pages
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Intro from "./pages/Intro.jsx";
//home section pages
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Sales from "./pages/dashboard/Sales.jsx";
import Help from "./pages/dashboard/Help.jsx";
import Inventory from "./pages/dashboard/Inventory.jsx";
import Manage from "./pages/dashboard/Manage.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Statistics from "./pages/dashboard/Statistics.jsx";
import Supply from "./pages/dashboard/Supply.jsx";
import NotFoundChild from "./pages/dashboard/NotFoundChild.jsx";
import EditUser from "./pages/dashboard/EditUser.jsx";
import CustomerRequests from "./pages/dashboard/CustomerRequests.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    //has tree of routes
    <Route path="/"                 element={<RootLayout />} >
      <Route index                      element={<Intro />} />
      <Route path="login"               element={<Login />} />
      <Route path="home"                element={<HomeLayout />} >
          <Route path="dashboard"           element={<Dashboard />} />
          <Route path="sales"               element={<Sales />} />
          <Route path="help"               element={<Help />} />
          <Route path="inventory"               element={<Inventory />} />
          <Route path="manage"               element={<Manage />} >
            <Route path="edit/:id"   element={<EditUser/>}/>
          </Route>
          <Route path="settings"               element={<Settings />} />
          <Route path="statistics"               element={<Statistics />} />
          <Route path="supply"               element={<Supply />} />
          <Route path="requests"               element={<CustomerRequests />} />
          {/* catch-all child route for 404 */}
          <Route path ="*" element={<NotFoundChild/>}/>
      </Route>
      <Route path="about"               element={<About />} />
      
      {/* catch-all route for 404 */}
      <Route path ="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
