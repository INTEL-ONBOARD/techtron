import React from 'react'
import {Link, NavLink, Outlet, useLocation } from 'react-router-dom'

//import image files
import sidebar_dashboard_img from '../assets/sidebar_dashboard.png';
import sidebar_supply_img from '../assets/sidebar_supply.png';
import sidebar_statistics_img from '../assets/sidebar_statistics.png';
import sidebar_manage_img from '../assets/sidebar_manage.png';
import sidebar_help_img from '../assets/sidebar_help.png';
import sidebar_inventory_img from '../assets/sidebar_inventory.png';
import sidebar_logout_img from '../assets/sidebar_logout.png';
import sidebar_sales_img from '../assets/sidebar_sales.png';
import sidebar_settings_img from '../assets/sidebar_settings.png';
function Sidebar() {

   //to highlight the currrent page's sidebar item from the sidebar
    const location = useLocation();
    const currentPath = location.pathname;
    
  return (
<aside id="logo-sidebar" className="fixed top-0 left-0 ml-5 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
      <ul className="space-y-2 font-medium">
         <li>
         <Link to="dashboard" className={`${currentPath === '/home/dashboard' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
               <img className='w-6' src={sidebar_dashboard_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Dashboard</span>
            </Link>
         </li>
         <li>
         <Link to="supply" className={`${currentPath === '/home/supply' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_supply_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Supply</span>
               <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">New</span>
            </Link>
         </li>
         <li>
            <Link to="statistics" className={`${currentPath === '/home/statistics' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_statistics_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Statistics</span>
               <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">New</span>
            </Link>
         </li>
         <li>
            <Link to="sales" className={`${currentPath === '/home/sales' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_sales_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Sales</span>
            </Link>
         </li>
         <li>
            <Link to="inventory" className={`${currentPath === '/home/inventory' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_inventory_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Inventory</span>
            </Link>
         </li>
         <li>
            <Link to="manage" className={`${currentPath === '/home/manage' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_manage_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Management</span>
               {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span> */}
            </Link>
         </li>
         <li>
            <Link to="settings" className={`${currentPath === '/home/settings' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_settings_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Settings</span>
            </Link>
         </li>
         <hr />
         <li>
            <Link to="help" className={`${currentPath === '/home/help' ? 'bg-blue-200':""} flex items-center p-2 text-[#939393] rounded-lg hover:bg-blue-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_help_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Help</span>
            </Link>
         </li>
         <li>
            <Link to="/" className={` flex items-center p-2 text-[#939393] rounded-lg hover:bg-orange-100 translate hover:translate-x-1 delay-200 duration-300 group`}>
            <img className='w-6' src={sidebar_logout_img} alt="" />
               <span className="flex-1 ms-5 whitespace-nowrap">Logout</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>
  )
}

export default Sidebar