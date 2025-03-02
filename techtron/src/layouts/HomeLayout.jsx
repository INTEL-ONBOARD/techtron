import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function HomeLayout() {
  return (
    <div>
      {/* navbar content */}
      <Header />
      {/* sidebar content */}
      <Sidebar />
      {/* section content */}
      <div className="p-4 sm:mr-20 sm:ml-72 mt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
