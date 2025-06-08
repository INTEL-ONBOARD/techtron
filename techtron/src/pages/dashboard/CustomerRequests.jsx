import React from "react";

function CustomerRequests() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-[#535353]">
        Customer Requests
      </h1>
      <p className="w-1/3 text-justify mb-6 ml-2 text-[#DCDCDC]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quos
        perspiciatis aut aliquid tenetur nisi ea animi, recusandae fuga beatae
        quae neque iure ipsa obcaecati iste eum. Quaerat, ea assumenda?
      </p>
      {/* upper section */}
      <div className="flex flex-row divide-x divide-[#F1F1F1] gap-4">
        {/* sales textfields section(left) */}
        <div className="w-1/3 mr-5">
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
              rows="4"
              className="block p-2.5 w-full text-sm text-[#D3D3D3] bg-[#F8F8F8] rounded-lg border border-[#EBEBEB] focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Fault information of the device..."
            ></textarea>
          </div>
          {/* service card */}
          <div className="bg-blue-900 mt-4 justify-center rounded-xl p-6 h-52 flex flex-col items-center text-white shadow-lg">


            <p className="font-light">Service Code</p>
            <h3 className="text-xl font-bold mb-4">KLDFO324334</h3>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>


          </div>
        </div>

        {/* sales table section(right) */}
        <div className="pl-10 pr-3 w-2/3">
          <div className="text-xl font-medium mb-10">Request List</div>
          {/* services list with toggle switches */}
          <div className="flex flex-col gap-4 overflow-y-auto h-[26rem] ml-4">

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#c0c0c0] mr-8">
                  Cleaning Service
                </span>
              </div>
              <span className=" text-md font-normal text-[#c0c0c0] mr-8">
                Rs/- 700
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Keyboard Replacement
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>

            <label class="inline-flex justify-between cursor-pointer">
              <div className="flex flex-row">
                <input type="checkbox" value="" className="sr-only peer" />
                {/* peer-checked:after:translate-x-full -> peer-checked:after:translate-x-5 to fix flowbite toggle circle error*/}
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></div>
                <span className="ms-3 ml-8 text-md font-normal text-[#686868] mr-8">
                  Windows Installation
                </span>
              </div>
              <span className=" text-md font-normal text-[#686868] mr-8">
                Rs/- 2,300
              </span>
            </label>


          </div>
          <div className="bg-[#545454] flex px-6 flex-row mt-4 justify-between border-gray-200">
                  <h6 className="p-3 text-sm mt-1 font-normal text-[#FFFFFF]">Total</h6>
                  <h6 className="p-3 text-md font-normal text-[#FFFFFF]">Rs/- 34,500.00</h6>
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="flex flex-row mt-8 align-middle bg-[#F9F9F9] rounded-lg p-6 m-8 justify-end ">
        
        <div className="flex flex-row gap-6">
          <button className="px-10 py-2.5 transition duration-200 bg-[#3A3A3A] hover:bg-gray-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block">Clear</span>
          </button>
          <button className="px-10 py-2.5 transition duration-200 bg-[#1A318C] hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50 text-white rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span className="inline-block mr-2">Continue</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomerRequests;
