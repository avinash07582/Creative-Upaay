import React from 'react'
import {  Search,Calendar, HelpCircle, Bell } from "lucide-react";


const Header = () => {
  return (
    <div className='flex items-center justify-between bg-white p-4 rounded-2xl shadow-md '>
     <div className="flex items-center gap-2">
        <div className="bg-purple-500 text-white p-2 rounded-full">
          <span className="text-xl font-bold">👤</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800">Project M.</h1>
        <button className="text-gray-600">
          <span className="text-lg">←</span>
        </button>
      </div>

     
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 border rounded-xl bg-gray-100 focus:outline-none"
        />
      </div>

      
      <div className="flex items-center gap-10">
        <Calendar className="text-gray-600 cursor-pointer" />
        <HelpCircle className="text-gray-600 cursor-pointer" />
        <div className="relative">
          <Bell className="text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center gap-12 mr-12  cursor-pointer">
          <img
            src="/images/pic.jpg"
            alt="User"
            className="w-8 h-8 ml-15 rounded-full"
          />
          <div className='mr-12'>
            <p className="text-sm font-semibold">Avinash Upadhyay</p>
            <p className="text-xs text-gray-500">Bihar, India</p>
          </div>
        </div>
      </div>
     <hr/>
      
    </div>
  )
}

export default Header
