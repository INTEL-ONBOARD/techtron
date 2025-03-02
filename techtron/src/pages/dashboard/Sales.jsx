import React, { useState, useEffect } from "react";

function Sales() {
  return (
    <section className="text-gray-600 body-font">

        <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-[#535353]">Sales</h1>
        <p className="w-1/3 text-justify mb-6 ml-2 text-[#DCDCDC]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos
            perspiciatis aut aliquid tenetur nisi ea animi, recusandae fuga
            beatae quae neque iure ipsa obcaecati iste eum. Quaerat, ea
            assumenda?
          </p>
      {/* upper section */}
      <div className="flex flex-row gap-4">

        {/* inventory textfields section(left) */}
        <div className="w-1/3">
          <div className="text-xl font-medium mb-5">Customer</div>

          {/* input fields */}
          <div className="flex flex-row justify-between">
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="itemId"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Item ID
              </label>
              <input
                id="itemId"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Your email address"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="itemName"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Item Name
              </label>
              <input
                id="itemName"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Your email address"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                >
                  {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                  <option value="US">Accessories</option>
                  <option value="CA">Keyboard</option>
                  <option value="FR">Mouse</option>
                  <option value="FR">Casing</option>
                  <option value="FR">Monitor</option>
                  <option value="FR">Speakers</option>
                  <option value="FR">UPS</option>
                  <option value="FR">Desktop</option>
                  <option value="FR">Laptop</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="brand"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Brand
              </label>
              <div className="relative">
                <select
                  id="brand"
                  className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                >
                  {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                  <option value="US">Lenovo</option>
                  <option value="CA">HP</option>
                  <option value="FR">Logitech</option>
                  <option value="DE">Razor</option>
                </select>
              </div>
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Price (Rs.)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                //step="0.1"
                step="100"
                min="0"
                placeholder="0.00"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="quantity"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                //step="0.1"
                step="1"
                min="0"
                placeholder="0"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
          </div>
          <div className="w-1/2 mb-2 ml-2 mr-2 pr-4">
            <label
              for="status"
              className="block mb-1 text-sm font-medium text-[#D3D3D3]"
            >
              Status
            </label>
            <div className="relative ">
              <select
                id="status"
                className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
              >
                {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                <option value="US">Available</option>
                <option value="CA">Unavailable</option>
                <option value="FR">Removed</option>
              </select>
            </div>
            {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
          </div>
          <div>
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-[#D3D3D3] "
            >
              Description
            </label>
            <textarea
              id="message"
              rows="5"
              class="block p-2.5 w-full text-sm text-[#D3D3D3] bg-[#F8F8F8] rounded-lg border border-[#EBEBEB] focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Enter your item related qualities and description..."
            ></textarea>
          </div>
        </div>

{/* sales table section(right) */}
<div className="pl-10 pr-3 w-2/3">
<div className="text-xl font-medium mb-5">Services</div>
          {/* order items table */}
          <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-white bg-[#1A318C]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Item ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4">23</td>

                  <td className="px-6 py-4">Accessories</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ADATA Cable
                  </th>
                  <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">1,200.00</td>
                  <td className="px-6 py-4 text-right mr-3">30</td>
                  <td className="px-6 py-4 font-bold">Unavailable</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4">23</td>

                  <td className="px-6 py-4">Accessories</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ADATA Cable
                  </th>
                  <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">200.00</td>
                  <td className="px-6 py-4 text-right mr-3">230</td>
                  <td className="px-6 py-4 font-bold">Available</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4">23</td>

                  <td className="px-6 py-4">Accessories</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ADATA Cable
                  </th>
                  <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">1,200.00</td>
                  <td className="px-6 py-4 text-right mr-3">30</td>
                  <td className="px-6 py-4 font-bold">Available</td>
                  <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      {/* lower section */}
      <div className="flex flex-row mt-40 bg-[#F9F9F9] rounded-lg p-6 m-8 justify-end ">
        <div className="flex flex-row gap-6">
          <button className="px-10 py-2.5 transition duration-200 bg-red-600 hover:bg-red-500 focus:bg-red-400 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Clear</span>
          </button>
          <button className="px-10 py-2.5 transition duration-200 bg-[#3A3A3A] hover:bg-gray-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block">Reset</span>
          </button>
          <button className="px-10 py-2.5 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Create</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sales