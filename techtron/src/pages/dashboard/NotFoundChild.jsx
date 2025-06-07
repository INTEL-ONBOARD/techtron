import React from 'react'
import errorImg from '../../assets/error.png'

function NotFoundChild() {
  return (
    <div className="flex items-center justify-center text-center mt-80">
  <div>
    <img className="w-16 max-w-lg lg:mx-auto" src={errorImg} alt="Error Image" />
    <p className="text-xl text-[#3E3F43] font-medium mt-2">Something Went Wrong!</p>
    <p className="text-sm text-[#C0C0C0]">Error: Internal Server Error</p>
  </div>
</div>
  )
}

export default NotFoundChild