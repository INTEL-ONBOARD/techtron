import React, { useState } from "react";
import dashboard_img from "../../assets/dashboard_image.png";
import DashboardCard from "../../components/DashboardCard";

//dashboard card images
import dash_inv from "../../assets/dash_inv.png";
import dash_sales from "../../assets/dash_sales.png";
import dash_supply from "../../assets/dash_supply.png";
import dash_report from "../../assets/dash_report.png";
import { useToast } from "../../components/ToastService";


function Dashboard() {

  //3 uis for 3 roles: owner, assistant, (and cashier?)
  const [userRole, setUserRole] = useState("assistant");
  const toast = useToast();
  const roleSections = {
    owner: (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-1 text-[#535353]">
            Dashboard
          </h1>

          {/* dashboard card list */}
          <div className="flex flex-wrap divide-x divide-[#F1F1F1]">
            {/* revenue card */}
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
              <div className="flex flex-row justify-between">
                <h2 className="text-lg sm:text-2xl text-gray-900 font-bold title-font">
                  Revenue
                </h2>
                <div className="flex flex-row">
                  <p className="text-green-500">34%</p>
                  <svg
                    className="w-4 h-4 ms-1 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1v12m0 0l4-4m-4 4L1 9"
                    />
                  </svg>
                </div>
              </div>
              <p className="leading-relaxed text-sm mb-2">
                Sales in this Month
              </p>
              <h4 className="text-6xl font-medium text-black">45+</h4>
            </div>

            {/* revenue card */}
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
              <div className="flex flex-row justify-between">
                <h2 className="text-lg sm:text-2xl text-gray-900 font-bold title-font">
                  Sales
                </h2>
                <div className="flex flex-row">
                  <p className="text-green-500">34%</p>
                  <svg
                    className="w-4 h-4 ms-1 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1v12m0 0l4-4m-4 4L1 9"
                    />
                  </svg>
                </div>
              </div>
              <p className="leading-relaxed text-sm mb-2">Sales count</p>
              <h4 className="text-6xl font-medium text-black">45+</h4>
            </div>

            {/* revenue card */}
            <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-gray-200 border-opacity-60">
              <div className="flex flex-row justify-between">
                <h2 className="text-lg sm:text-2xl text-gray-900 font-bold title-font">
                  Users
                </h2>
                <div className="flex flex-row">
                  <p className="text-green-500">34%</p>
                  <svg
                    className="w-4 h-4 ms-1 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1v12m0 0l4-4m-4 4L1 9"
                    />
                  </svg>
                </div>
              </div>
              <p className="leading-relaxed text-sm mb-2">
                Sales in this Month
              </p>
              <h4 className="text-6xl font-medium text-black">3</h4>
            </div>
          </div>
        </div>
        {/* quick access lbl with horizontal line on the right */}
        <div className="flex items-center w-full">
          <p className="text-2xl ml-6 whitespace-nowrap">Quick Access</p>
          <hr className="flex-grow ml-4 mt-3 mr-10 border-t border-[#F0F0F0]" />
        </div>

        <div className="flex flex-col xl:flex-row m-10 gap-6">
          {/* Scrollable User List (Left Section) */}
          <ul className="w-full xl:w-1/5 h-64 overflow-y-auto divide-y divide-gray-200">
            <UserItem
              name="Jane Doe"
              role="Manager"
              imageSrc="/docs/images/people/profile-picture-2.jpg"
              amount="$450"
            />
            <UserItem
              name="Jane Doe"
              role="Manager"
              imageSrc="/docs/images/people/profile-picture-2.jpg"
              amount="$450"
            />
            <UserItem
              name="Jane Doe"
              role="Manager"
              imageSrc="/docs/images/people/profile-picture-2.jpg"
              amount="$450"
            />
            <UserItem
              name="Jane Doe"
              role="Manager"
              imageSrc="/docs/images/people/profile-picture-2.jpg"
              amount="$450"
            />
            <UserItem
              name="Jane Doe"
              role="Manager"
              imageSrc="/docs/images/people/profile-picture-2.jpg"
              amount="$450"
            />
          </ul>

          {/* Content Section (Right Section) */}
          <div className="w-full min-h-96 xl:w-4/5 bg-[#FBFBFB] flex items-center justify-center border rounded-lg p-10">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-800">
                This section will be updated soon...
              </p>
              <p className="text-sm font-normal text-gray-400">
                This feature will be available in the next release
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    assistant: (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-1 text-[#535353]">
            Dashboard
          </h1>

          {/* dashboard image with text on top of it */}
          <section class="relative mt-20">
            <img className="mt-10" src={dashboard_img} alt="" />
            <div class="absolute inset-0 opacity-60 rounded-md"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <h2 class="text-black text-3xl font-bold">
                Welcome Back, How is your day?
              </h2>
              <h1 className="">2024 - 12 -29</h1>
              <h1>Last logged in: 18:34</h1>
            </div>
          </section>
          {/* dashboard card list */}
          <div className="flex, flex-row"></div>
        </div>
        {/* quick access lbl with horizontal line on the right */}
        <div className="flex items-center w-full">
          <p className="text-2xl ml-6 whitespace-nowrap">Quick Access</p>
          <hr className="flex-grow ml-4 mt-3 mr-10 border-t border-[#F0F0F0]" />
        </div>

        <div className="flex flex-col xl:flex-row divide-[#F1F1F1] m-10 gap-6">
          {/* Scrollable User List (Left Section) */}
          <DashboardCard
              imageSrc={dash_inv}
              title="Inventory"
              description="view and manage your invntory"
              onButtonClick={() => {
                const id = toast.open("Logged in as user...", 3000)
                alert("Button clicked!")

              }}
            />
            <DashboardCard
              imageSrc={dash_sales}
              title="Sales"
              description="Perform Sales Actions"
              onButtonClick={() => alert("Button clicked!")}
            />
            <DashboardCard
              imageSrc={dash_report}
              title="Reports"
              description="Create and View Reports"
              onButtonClick={() => alert("Button clicked!")}
            />
            <DashboardCard
              imageSrc={dash_supply}
              title="Supply"
              description="View and Manage Requests"
              onButtonClick={() => alert("Button clicked!")}
            />
        </div>
      </section>
    ),
    manager: (
      <section className="text-gray-600 body-font">
        <h1>This is manager</h1>
      </section>
    ),
  };

  return (
    <div>
      {roleSections[userRole] || (
        <section className="text-gray-600 body-font">
          <h1>Role not recognized</h1>
        </section>
      )}
    </div>
  );
}

export default Dashboard;

const UserItem = ({ name, role, imageSrc, amount = "$320" }) => {
  return (
    <li className="pb-3 sm:pb-4 mt-1">
      <div className="flex items-center mt-1 space-x-4">
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={imageSrc}
            alt={`${name} image`}
          />
        </div>
        {/* Name & Role */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <p className="text-sm text-gray-500 truncate">{role}</p>
        </div>
        {/* Amount */}
        <div className="inline-flex items-center text-base font-semibold text-gray-900">
          {amount}
        </div>
      </div>
    </li>
  );
};
