import React from "react";

function Supply() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-6 ml-2">
        <h1 className="sm:text-3xl text-2xl font-medium mb-5 text-[#535353]">
          Supply
        </h1>
        <p className="w-1/3 text-[#b4b4b4]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos
          perspiciatis aut aliquid tenetur nisi ea animi, recusandae fuga beatae
          quae neque iure ipsa obcaecati iste eum. Quaerat, ea assumenda?
        </p>
      </div>
      {/* upper section */}
      <div className="flex flex-row divide-x gap-4">
        {/* generate report(left) */}
        <div className="pl-3 pr-3 w-2/5">
          <div className="text-xl font-medium mb-4">Order Requests</div>
          {/* <p>order requests table goes here</p> */}
          <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-white bg-[#1A318C]">
                <tr>
                  <th scope="col" className="px-6 py-3 w-10">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <th className="px-6 py-4">23</th>
                  <td scope="row" className="px-6 py-4">
                    2022-02-12
                  </td>
                  <td className=" px-6 py-4 font-semibold text-[#1D56A0]">
                    New
                  </td>
                  <td className="px-6 py-4">Rs. 34, 500.00</td>
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  {/* <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>       
                  </td> */}
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <th className="px-6 py-4">23</th>
                  <td scope="row" className="px-6 py-4">
                    2022-02-12
                  </td>
                  <td className=" px-6 py-4 font-semibold text-[#9C9C9C]">
                    Declined
                  </td>
                  <td className="px-6 py-4">Rs. 34, 500.00</td>
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  {/* <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>       
                  </td> */}
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <th className="px-6 py-4">23</th>
                  <td scope="row" className="px-6 py-4">
                    2022-02-12
                  </td>
                  <td className=" px-6 py-4 font-semibold text-[#F76D10]">
                    Declined
                  </td>
                  <td className="px-6 py-4">Rs. 34, 500.00</td>
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  {/* <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>       
                  </td> */}
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 w-10">#1</td>
                  <th className="px-6 py-4">23</th>
                  <td scope="row" className="px-6 py-4">
                    2022-02-12
                  </td>
                  <td className=" px-6 py-4 font-semibold text-[#82D875]">
                    Accepted
                  </td>
                  <td className="px-6 py-4">Rs. 34, 500.00</td>
                  {/* <td className="px-6 py-4">
                    <i
                      className="fi fi-rs-edit mr-4 hover:text-blue-600 hover:font-bold hover:rounded-full w-10"
                      onClick={() => loadEditUsers(user.id)}
                    ></i>
                  {/* {userData && userData.id !== user.id && (  // Conditionally render delete button */}
                  {/* <i
                    className="fi fi-rs-trash ml-4 hover:text-red-600 hover:font-bold hover:rounded-full w-10"
                    // onClick={() => deleteUser(user.id)}
                  ></i>       
                  </td> */}
                </tr>
              </tbody>
            </table>
            {/* pagination for table navigation */}
            <nav aria-label="Page navigation example" className="flex flex-row justify-end mt-8">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* order items(right) */}
        <div className="w-3/5 pl-10">
          <div className="text-xl font-medium mb-4">Order Items</div>
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
                    Quantity
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Action
                  </th> */}
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
                  <td className="px-6 py-4">12</td>
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
                  <td className="px-6 py-4">23</td>

                  <td className="px-6 py-4">Accessories</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ADATA Cable
                  </th>
                  <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4">12</td>
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
                  <td className="px-6 py-4">23</td>

                  <td className="px-6 py-4">Accessories</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ADATA Cable
                  </th>
                  <td className="px-6 py-4 ">Logitech</td>
                  <td className="px-6 py-4">12</td>
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
            {/* pagination for table navigation */}
            <nav aria-label="Page navigation example" className="flex flex-row justify-end mt-8">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* lower section */}
      <div className="flex flex-row mt-40 bg-[#F9F9F9] rounded-lg p-6 m-8 justify-end ">
        <div className="flex flex-row gap-6">
          <button className="w-40 transition duration-200 bg-red-600 hover:bg-red-900 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Decline</span>
          </button>
          <button className="w-40 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Accept</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Supply;
