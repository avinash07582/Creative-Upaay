import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowDownWideNarrow, DotIcon, HomeIcon, MessagesSquareIcon, PanelTopClose, Settings2Icon, ThermometerSnowflakeIcon } from "lucide-react";


const Sidenav = () => {
  return ( 
    <>
  <div className=" main h-full w-[15%]   flex flex-col ">
 
    <div className= " home mt-20 ml-5 px-3    flex ">
         <HomeIcon className="mt-3"/>

      <h1 className=" p-3 text-xl  font-bold text-zinc-400">Home</h1>
    
    </div>
    <div className= " home mt-5 ml-5 px-3   flex ">
         <MessagesSquareIcon className="mt-3"/>

      <h1 className=" p-3 text-xl  font-bold text-zinc-400">Messages</h1>
    
    </div>
    <div className= " home mt-5 ml-5 px-3   flex ">
         <ThermometerSnowflakeIcon className="mt-3"/>

      <h1 className=" p-3 text-xl  font-bold text-zinc-400">Tasks</h1>
    
    </div>
    <div className= " home mt-5 ml-4 px-3   flex ">
       <PanelTopClose className="mt-3"/>
      <h1 className=" p-3 text-xl  font-bold text-zinc-400">Members</h1>
    
    </div>
    <div className= " home mt-5 ml-4 px-3   flex ">
       <Settings2Icon className="mt-3"/>
      <h1 className=" p-3 text-xl  font-bold text-zinc-400">Settings</h1>
    
    </div>
    
    <hr className='border-none h-[1px]  bg-zinc-400' />
    <div className= " home mt-5 ml-4 px-3   flex ">
      
      <h1 className=" p-3 text-xl  font-bold text-zinc-400">My Projects</h1>
      <ArrowDownWideNarrow className="mt-3 ml-12"/>
    
    </div>
    <div className="mt-3">
      <li className="marker:text-red-500 ml-10 text-xl   mb-3 font-bold text-zinc-400">Mobile App</li>
      
    </div>
    <div className="mt-3">
      <li className="marker:text-orange-500 ml-10 text-xl  mb-3 font-bold text-zinc-400">Website Redesign</li>
      
    </div>
    <div className="mt-3">
      <li className="marker:text-purple-300 ml-10 text-xl mb-3 font-bold text-zinc-400">Design System</li>
      
    </div>
    <div className="mt-3">
      <li className="marker:text-blue-500 ml-10 text-xl  mb-3 font-bold text-zinc-400">Wireframes</li>


      <div className="relative bg-gray-100 p-2 mr-4 rounded-2xl shadow-lg w-72 text-center">
     
      <div className="absolute  left-1/2 mr-3 bg-yellow-400 p-2 rounded-full">
       
      </div>

      
      <h2 className="font-semibold text-gray-900 mt-4">Thoughts Time</h2>
      <p className="text-gray-500 text-xs mt-2">
        We don’t have any notice <br />for you, till <br /> then you <br /> can 
        share your <br /> thoughts
        with your peers.
      </p>

     
      <button className="mt-4 bg-white border border-gray-300 text-gray-900 font-medium py-2 px-4 rounded-md shadow ">
        Write a message
      </button>
    </div>
   
      
    </div>

    
    

    

    
  </div>
  
   <div className=" border  h-screen border-zinc-500 "></div>
   
  </>
  
  
);
}

export default Sidenav;
