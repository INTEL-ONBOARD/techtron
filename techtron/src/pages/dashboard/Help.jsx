import React from 'react'

function Help() {
  return (
    <section className="flex flex-col h-full text-gray-600 body-font">
      {/* Header section */}
      <div className="container px-5 py-6 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium mb-1 text-[#535353]">
          Help
        </h1>
      </div>

      {/* Upper section - takes remaining space */}
      <div className="flex-grow mb-40">
        {/*the child inside this takes only half of the width this parent has provided to match figma design*/}
        <div className="p-8">
          {/* help section(left) */}
          <div className="pl-3 pr-3 w-1/2">
            <h2 className="text-xl font-medium mb-5">We are here to help you out</h2>
            <p className='text-[#DCDCDC] text-justify'>
            If you need assistance while using the application, we’ve got you covered! Our support section is designed to help you navigate the system with ease. Whether you're encountering an issue, have a question, or need guidance on specific features, you can access detailed guides, FAQs, and troubleshooting tips. For further assistance, you can reach out to our dedicated support team through live chat, email, or phone. We're here to ensure you have a smooth and hassle-free experience with the application!
            </p>

            
          </div>
          {/* include the right section here if you want to */}
        </div>
      </div>

      {/* Lower section */}
      {/* <div className="bg-[#F9F9F9] rounded-lg p-6 m-8 flex justify-end">
        <div className="flex gap-6">
          <button className="w-40 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-sm transition duration-200 hover:bg-red-900 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-900 focus:ring-opacity-50">
            Clear Data
          </button>
          <button className="w-40 py-2.5 text-sm font-semibold text-white bg-[#1A318C] rounded-lg shadow-sm transition duration-200 hover:bg-blue-700 focus:bg-blue-900 focus:shadow-sm focus:ring-4 focus:ring-blue-900 focus:ring-opacity-50">
            Create
          </button>
        </div>
      </div> */}
    </section>
    
  )
}

export default Help