import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  useLocation,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Sales from "./pages/Sales.jsx";
import NotFound from "./pages/NotFound.jsx";
import NotFoundChild from "./pages/NotFoundChild.jsx";

//layouts
import RootLayout from "./layouts/RootLayout.jsx";
import Intro from "./pages/Intro.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    //has tree of routes
    <Route path="/"                 element={<RootLayout />} >
      <Route index                      element={<Intro />} />
      <Route path="login"               element={<Login />} />
      <Route path="home"                element={<HomeLayout />} >
        <Route path="dashboard"           element={<Dashboard />} />
        <Route path="sales"               element={<Sales />} />
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
