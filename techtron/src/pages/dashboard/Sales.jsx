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

        {/* sales textfields section(left) */}
        <div className="w-1/3">
          <div className="text-xl font-medium mb-5">Customer</div>

          {/* input fields */}
          <div className="flex flex-row justify-between">
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="serviceCode"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Service Code
              </label>
              <input
                id="serviceCode"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Enter Service ID"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Enter the customer name"
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
                for="contact"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Contact
              </label>
              <input
                id="contact"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Enter the customer contact"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
            <div className="mb-2 ml-2 mr-2 w-1/2">
              <label
                for="device"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Device
              </label>
              <input
                id="device"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="The customer's device"
              />
              {/*<p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>*/}
            </div>
          </div>
          <div>
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-[#D3D3D3] "
            >
              Description
            </label>
            <textarea
              id="description"
              rows="5"
              class="block p-2.5 w-full text-sm text-[#D3D3D3] bg-[#F8F8F8] rounded-lg border border-[#EBEBEB] focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Fault information of the device..."
            ></textarea>
          </div>
          <div className="mt-6 mb-2 ml-2 mr-2 w-1/2">
              <label
                for="amountPaid"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Amount Paid(Rs.)
              </label>
              <input
                id="amountPaid"
                name="amountPaid"
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
                    Service ID
                  </th>
                  <th scope="col" className="px-6 py-3 w-1/2">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-right pr-14">
                    Cost
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4 w-10">F98DS9HFIDSK</td>
                  <td className="px-6 py-4">Battery Replacement for Desktop Motherboard</td>
                  <td scope="row" className="px-6 py-4 text-right w-30">
                    Rs. 100,000
                  </td>
                  {/* <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">1,200.00</td>
                  <td className="px-6 py-4 text-right mr-3">30</td>
                  <td className="px-6 py-4 font-bold">Unavailable</td> */}
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i> */}
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    {/* <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td> */}
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4 w-10">F98DS9HFIDSK</td>
                  <td className="px-6 py-4">Battery Replacement for Desktop Motherboard</td>
                  <td scope="row" className="px-6 py-4 text-right w-30">
                    Rs. 100,000
                  </td>
                  {/* <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">1,200.00</td>
                  <td className="px-6 py-4 text-right mr-3">30</td>
                  <td className="px-6 py-4 font-bold">Unavailable</td> */}
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i> */}
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    {/* <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td> */}
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <td className="px-6 py-4 w-10">F98DS9HFIDSK</td>
                  <td className="px-6 py-4">Battery Replacement for Desktop Motherboard</td>
                  <td scope="row" className="px-6 pr-19 py-4 text-right w-30">
                    Rs. 100,000
                  </td>
                  {/* <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4 text-right mr-3">1,200.00</td>
                  <td className="px-6 py-4 text-right mr-3">30</td>
                  <td className="px-6 py-4 font-bold">Unavailable</td> */}
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i> */}
                    {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                    {/* <i
                      className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    ></i>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      {/* lower section */}
      <div className="flex flex-row mt-40 align-middle bg-[#F9F9F9] rounded-lg p-6 m-8 justify-between ">
      <div className="flex flex-row align-middle">
        <p className="w-full mt-2">Search Service Code: </p>
        <input
                id="serviceCode"
                type="text"
                className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                placeholder="Enter the item ID"
              />
      </div>
        <div className="flex flex-row gap-6">
        <button className="px-10 py-2.5 transition duration-200 bg-[#3A3A3A] hover:bg-gray-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block">Clear</span>
          </button>
          <button className="px-10 py-2.5 transition duration-200 bg-[#0017E7] hover:bg-blue-500 focus:bg-red-400 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Download Receipt</span>
          </button>
          <button className="px-10 py-2.5 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Proceed Payment</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sales