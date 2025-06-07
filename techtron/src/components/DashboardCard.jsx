import React from 'react'

function DashboardCard({ imageSrc, title, description, onButtonClick }) {
  return (
    <div className="w-64 rounded-2xl overflow-hidden bg-white">
      {/* Image */}
      <img src={imageSrc} alt={title} className="w-20 h-20 object-cover" />

      {/* Title */}
      <h4 className="p-4 text-xl font-semibold text-gray-800">{title}</h4>

      {/* Description */}
      <p className="px-4 pb-2 text-gray-400 text-sm">{description}</p>

      {/* Button */}
      <div className="px-4 pb-4">
        <button
          onClick={onButtonClick}
          className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Access
        </button>
      </div>
    </div>
  )
}

export default DashboardCard