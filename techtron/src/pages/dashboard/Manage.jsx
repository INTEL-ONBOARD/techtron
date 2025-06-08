import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
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
      if (true) {
      }
    } catch (error) {
      console.error("Error loading user data for edit:", error);
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
            <button
            onClick={()=> loadEditUser("")} 
            className="w-40 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span className="inline-block mr-2">New User</span>
            </button>
          </div>
        </div>

        {/*conditionally renders table data and user configuraion outlet*/}
        {!isEditUserOutletOpen ? (
          //this is the table
          <div className="relative overflow-x-auto sm:rounded-lg mt-10">
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
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Heshani
                  </th>
                  <td className="px-6 py-4">Heshani@gmail.com</td>
                  <td className="px-6 py-4">lsf67s6fds7</td>
                  <td className=" px-6 py-4 font-bold text-[#1D56A0]">High</td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => {
                        loadEditUser("kamal");
                      }}
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
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Heshani
                  </th>
                  <td className="px-6 py-4">Heshani@gmail.com</td>
                  <td className="px-6 py-4">lsf67s6fds7</td>
                  <td className=" px-6 py-4 font-bold text-[#5589CD]">
                    Medium
                  </td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => {
                        loadEditUser("heshani");
                        setEditUserOutletOpen(true);
                      }}
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
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Heshani
                  </th>
                  <td className="px-6 py-4">nimal@gmail.com</td>
                  <td className="px-6 py-4">lsf67s6fds7</td>
                  <td className=" px-6 py-4 font-bold text-[#80B5FA]">Low</td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => {
                        loadEditUser("nimal");
                        setEditUserOutletOpen(true);
                      }}
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
        ) : (
          <div className="p-4">
            <section>
              {/* upper section */}
              <div className="flex flex-row divide-x gap-4">
                {/* generate report(left) */}
                <div className="pl-3 pr-3 w-3/5">
                  <h2 className="text-xl font-medium mb-5">
                    User Configurations
                  </h2>
                  {/* textfields */}
                  <div className="flex flex-row justify-between">
                    <div className="mb-2 ml-2 mr-2 w-1/3">
                      <label
                        for="username"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        placeholder="User's name"
                      />
                      {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                    </div>
                    <div className="mb-2 ml-2 mr-2 w-1/3">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        placeholder="User email address"
                      />
                      {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                    </div>
                    <div className="w-1/3 mr-4 ml-4">
                      <label
                        for="userRole"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        User Role
                      </label>
                      <div className="relative">
                        <select
                          id="userRole"
                          className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        >
                          {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                          <option value="CA">Assistant</option>
                          <option value="US">Cashier</option>
                          <option value="FR">Owner</option>
                          <option value="DE">Manager</option>
                        </select>
                      </div>
                      {/* <p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p> */}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="mb-2 ml-2 mr-2 w-1/3">
                      <label
                        for="oldPassword"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        Old Password
                      </label>
                      <input
                        id="oldPassword"
                        type="password"
                        className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        placeholder="Your current password"
                      />
                      {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                    </div>
                    <div className="mb-2 ml-2 mr-2 w-1/3">
                      <label
                        for="newPassword"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        placeholder="Your new password"
                      />
                      {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                    </div>
                    <div className="mb-2 ml-2 mr-2 w-1/3">
                      <label
                        for="confirmNewPasswordd"
                        className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                      >
                        Confirm new Password
                      </label>
                      <input
                        id="confirmNewPassword"
                        type="password"
                        className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                        placeholder="Retype your password"
                      />
                      {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                    </div>
                  </div>
                  <div className="mb-2 ml-2 mr-2 w-1/3">
                    <label
                      for="otpCode"
                      className="block mb-2 text-sm font-medium text-[#D3D3D3]"
                    >
                      OTP Code
                    </label>
                    <input
                      id="otpCode"
                      type="text"
                      className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                      placeholder="Your email address"
                    />
                    {/*<p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>*/}
                  </div>
                  <div className="pl-4 pr-4 mt-7"></div>
                </div>

                {/* permission configurations(right) */}
                <div className="w-2/5 pl-10">
                  <div className="text-xl font-medium mb-5">
                    Permission Configurations
                  </div>
                  {/*toggle button list  with scroller*/}
                  <div className="h-72 p-4 overflow-y-auto flex flex-col gap-2">
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#686868]">
                          View Users
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#686868]">
                          Add Users
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0]">
                          Update Users
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0]">
                          Delete Users
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0]">
                          View Items
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          disabled
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0]">
                          Add Items
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          disabled
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0]">
                          Delete Items
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lower section */}
              <div className="bg-[#F9F9F9] rounded-lg mt-24 p-6 m-8 flex justify-end">
                <div className="flex gap-6">
                  <button
                    onClick={() => {
                      //clear textboxes
                      //show table
                      setEditUserOutletOpen(false);
                    }}
                    className="w-40 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-sm transition duration-200 hover:bg-red-900 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      //execute api call
                      //clear textboxes
                      //refresh table or redirect to this page
                      //show table
                      setEditUserOutletOpen(false);
                    }}
                    className="w-40 py-2.5 text-sm font-semibold text-white bg-[#1A318C] rounded-lg shadow-sm transition duration-200 hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50"
                  >
                    Update User
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}

export default Manage;
