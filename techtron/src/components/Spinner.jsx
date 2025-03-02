import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p>please wait ...</p>
    </div>
  )
}

export default Spinner