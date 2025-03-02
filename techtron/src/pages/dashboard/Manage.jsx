import React, { useEffect, useState } from 'react';
import {Link, NavLink, useNavigate, Outlet} from 'react-router-dom'
//import images
import delete_img from "../../assets/delete.png";
import edit_img from "../../assets/edit.png";

function Manage() {
  const navigate = useNavigate();
  
  //to conditionally hide and render between table and the edit user outlet
  const [isEditUserOutletOpen, setEditUserOutletOpen] = useState(false);

  // Loading user data into edit modal's textboxes
  const loadEditUser = async (userId) => {
    try {
      //const result = await axios.get(`http://localhost:8082/api/users/${userId}`);
      //console.log(result.data.data)
      //setEditUser(result.data.data);
      //setSelectedUserId(userId);
      setEditUserOutletOpen(true);
      if(true){
        navigate(`/home/manage/edit/${userId}`);
      }
    } catch (error) {
      console.error('Error loading user data for edit:', error);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium mb-1 text-[#535353]">
          Manage
        </h1>
        {/* dashboard card list */}
        <div className="flex flex-wrap divide-x divide-[#F1F1F1]">
          {/* users card */}
          <div className="xl:w-1/6 lg:w-1/2 md:w-1/2 px-8 py-6 text-end border-gray-200 border-opacity-60">
            <p className="text-6xl font-medium text-black">+34</p>
            <h2 className="text-lg sm:text-2xl text-gray-900 font-bold title-font">
              Users
            </h2>
            <p className="leading-relaxed text-sm mb-2">Total User Count</p>
          </div>

          {/* user count card */}
          <div className="xl:w-1/6 lg:w-1/2 md:w-1/2 px-8 py-6 border-gray-200 border-opacity-60">
            <div className="grid grid-cols-2 grid-rows-2">
              <div className="text-end">
                <p className="font-bold text-2xl text-black">2</p>
                <p className="font-normal text-md text-black">Owners</p>
              </div>
              <div className="text-end">
                <p className="font-bold text-2xl text-black">9+</p>
                <p className="font-normal text-md text-black">Assistance</p>
              </div>
              <div className="text-end">
                <p className="font-bold text-2xl text-black">2</p>
                <p className="font-normal text-md text-black">Manager</p>
              </div>
              <div className="text-end">
                <p className="font-bold text-2xl text-black">7</p>
                <p className="font-normal text-md text-black">Supplies</p>
              </div>
            </div>
          </div>

          {/* user permissions and new user */}
          <div className="xl:w-4/6 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
            <h4 className="text-xl font-medium text-black">
              Users and Permissions
            </h4>
            <p className="leading-relaxed text-sm mb-2 text-gray-400">
              Lorem Ipsum is simply dummy texry's standard dummy text ever since
              the 1500s, when an unknown printer took a ga It was populas, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum
            </p>
            <button className="w-40 transition duration-200 bg-[#1A318C] hover:bg-blue-900 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span className="inline-block mr-2">New User</span>
            </button>
          </div>
        </div>
        {/* user table section(needs to be condition renederd to show an outlet)*/}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white uppercase bg-[#1A318C]">
              <tr>
                <th scope="col" className="px-6 py-3 w-10">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Permission Lvl
                </th>
                <th scope="col" className="px-6 py-3">
                  Active Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 w-10">1</td>
                <td className="px-6 py-4 w-10">23</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Heshani
                </th>
                <td className="px-6 py-4">Heshani@gmail.com</td>
                <td className="px-6 py-4">lsf67s6fds7</td>
                <td className=" px-6 py-4 font-bold text-[#1D56A0]">High</td>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4">
                  <i
                    className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                     onClick={() => loadEditUser("kamal")}
                  ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 w-10">1</td>
                <td className="px-6 py-4 w-10">23</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Heshani
                </th>
                <td className="px-6 py-4">Heshani@gmail.com</td>
                <td className="px-6 py-4">lsf67s6fds7</td>
                <td className=" px-6 py-4 font-bold text-[#5589CD]">Medium</td>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4">
                  <i
                    className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                     onClick={() => loadEditUser("gihan")}
                  ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                <td className="px-6 py-4 w-10">1</td>
                <td className="px-6 py-4 w-10">23</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Heshani
                </th>
                <td className="px-6 py-4">Heshani@gmail.com</td>
                <td className="px-6 py-4">lsf67s6fds7</td>
                <td className=" px-6 py-4 font-bold text-[#80B5FA]">Low</td>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4">
                  <i
                    className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                     onClick={() => loadEditUser("nimal")}
                  ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table data */}
        <div>

        </div>
        {/* outlet */}
        <div className="p-4">
          <Outlet/>
        </div>
      </div>
    </section>
  );
}

export default Manage;
