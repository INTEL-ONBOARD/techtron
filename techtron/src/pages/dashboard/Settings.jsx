import React, { useState } from "react";

function Settings() {
  return (
    <section className="flex flex-col h-full text-gray-600 body-font">
      {/* Header section */}
      <div className="container px-5 py-6 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium -mb-5 text-[#535353]">
          Settings
        </h1>
      </div>

      {/* Upper section - takes remaining space */}
      <div className="flex-grow mb-40">
        {/*the child inside this takes only half of the width this parent has provided to match figma design*/}
        <div className="p-8">
          {/* settings section(left) */}
          <div className="pl-3 pr-3 w-1/2">
            <h2 className="text-xl font-medium mb-5">Smart Settings</h2>
            <p className='text-[#DCDCDC] text-justify'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quos perspiciatis aut aliquid tenetur nisi ea animi, recusandae
              fuga beatae quae neque iure ipsa obcaecati iste eum. Quaerat, ea
              assumenda?
            </p>
            <h2 className="text-xl font-medium mb-5 mt-8">
              Custom Configurations
            </h2>
            {/* input fields */}
            <div className="flex flex-col gap-2">
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] ">
                  Auto Synching
                </span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] ">
                  Auto Reload
                </span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" disabled/>
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0] ">
                  Clear cache when the browser is closed
                </span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" disabled/>
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0] ">
                  Help system to collect data
                </span>
              </label>
            </div>
            </div>
          </div>
          {/* include the right section here if you want to */}
        </div>
      </div>

      {/* Lower section */}
      <div className="bg-[#F9F9F9] rounded-lg p-6 m-8 flex justify-end">
        <div className="flex gap-6">
          <button className="w-40 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-sm transition duration-200 hover:bg-red-900 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50">
            Clear Data
          </button>
          <button className="w-40 py-2.5 text-sm font-semibold text-white bg-[#1A318C] rounded-lg shadow-sm transition duration-200 hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50">
            Create
          </button>
        </div>
      </div>
    </section>
  );
}

export default Settings;
