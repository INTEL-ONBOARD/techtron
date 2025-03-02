import React, { useState } from "react";
import DateRangePicker from "../../components/DateRangePicker.jsx";

function Statistics() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };
  const handleApplyDate = (start, end) => {
    console.log("Applied Dates:", start, end);
  };
  const handleCancelDate = () => {
    console.log("Date selection canceled");
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium mb-1 text-[#535353]">
          Statistics
        </h1>
      </div>
      {/* upper section */}
      <div className="flex flex-row divide-x gap-4">
        {/* generate report(left) */}
        <div className="pl-3 pr-3 w-1/2">
          <h2 className="text-xl font-medium mb-5">Genrerate Report</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos
            perspiciatis aut aliquid tenetur nisi ea animi, recusandae fuga
            beatae quae neque iure ipsa obcaecati iste eum. Quaerat, ea
            assumenda?
          </p>
          <h2 className="text-xl font-medium mb-5 mt-8">Custom Report</h2>
          {/* textfields */}
          <div className="mb-6 ml-4 mr-4">
            <label
              for="requestedBy"
              className="block mb-2 text-sm font-medium text-[#D3D3D3]"
            >
              Requested by
            </label>
            <input
              id="requestedBy"
              type="text"
              className="bg-[#F8F8F8] border border-[#EBEBEB] text-gray-800 placeholder-[#D3D3D3] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
              placeholder="Your email address"
            />
            <p className="mt-2 text-sm text-red-400">
              <span className="font-medium">Error:</span> Please fill out this
              field to proceed.
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-1/2 mr-4 ml-4">
              <label
                for="userProfile"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                User Profile
              </label>
              <div className="relative">
                <select
                  id="userProfile"
                  className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                >
                  {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                  <option value="US">Shanika</option>
                  <option value="CA">Dammika</option>
                  <option value="FR">Udil</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <p className="mt-2 text-sm text-red-400">
                <span className="font-medium">Error:</span> Please fill out this
                field to proceed.
              </p>
            </div>
            <div className="w-1/2 mr-4 ml-4">
              <label
                for="reportType"
                className="block mb-2 text-sm font-medium text-[#D3D3D3]"
              >
                Report Type
              </label>
              <div className="relative">
                <select
                  id="reportType"
                  className="peer bg-[#F8F8F8] border border-[#EBEBEB] text-[#7c7c7c] text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                >
                  {/* <option value="" className="text-gray-400" disabled selected>Choose a profile</option> */}
                  <option value="US">Sales Report(Default)</option>
                  <option value="CA">Inventory Report</option>
                  <option value="FR">Employee Performance Report</option>
                  <option value="DE">Revenue Report</option>
                </select>
              </div>
              {/* <p className="mt-2 text-sm text-red-400"><span className="font-medium">Error:</span> Please fill out this field to proceed.</p>  */}
            </div>
          </div>
          {/* date time range */}
          <div className="pl-4 pr-4 mt-7">
            <DateRangePicker
              initialStartDate={startDate}
              initialEndDate={endDate}
              onDateChange={handleDateChange}
              onApply={handleApplyDate}
              onCancel={handleCancelDate}
            />
          </div>
        </div>

        {/* report log(right) */}
      <div className="w-1/2 pl-10">
        <div className="text-xl font-medium mb-5">Report Log</div>

          {/* scrollable report card list */}
          <div className="h-[400px] overflow-y-auto pr-4">
            {/* Example report cards */}
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="flex flex-row items-center bg-[#1A318C] hover:bg-blue-800 rounded-lg p-4 space-x-4 mb-4"
              >
                {/* white rectangle */}
                <div className="h-12 w-1 bg-white rounded-full"></div>
                {/* report text */}
                <div className="flex flex-col flex-grow">
                  <p className="text-white font-semibold">Sales Report</p>
                  <p className="text-white text-sm">2024/12/12</p>
                </div>
                {/* download icon */}
                <div className="text-white ml-auto items-center justify-center mt-2">
                  <i className="fi fi-rs-progress-download text-4xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="flex flex-row mt-40 bg-[#F9F9F9] rounded-lg p-6 m-8 justify-end ">
        <div className="flex flex-row gap-6">
          <button 
            className="w-40 transition duration-200 bg-red-600 hover:bg-red-900 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Clear Data</span>
          </button>
          <button 
            className="w-40 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Create</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
