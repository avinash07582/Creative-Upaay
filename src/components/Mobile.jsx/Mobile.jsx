// import React from "react";
// import Card from "../Cards";

// const taskData = {
//   todo: [
//     {
//       title: "Brainstorming",
//       description: "Brainstorming brings team members' diverse experience into play.",
//       priority: "Low",
//       comments: 12,
//       files: 0,
//       users: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1664541337092-81ad747fc1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
//       status: "To Do",
//     },
//     {
//       title: "Research",
//       description: "User research helps you to create an optimal product for users.",
//       priority: "High",
//       comments: 10,
//       files: 3,
//       users: ["https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
//       status: "To Do",
//     },
//   ],
//   inProgress: [
//     {
//       title: "Wireframes",
//       description: "Low fidelity wireframes include the most basic content and visuals.",
//       priority: "High",
//       comments: 8,
//       files: 1,
//       users: ["/https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
//       status: "In Progress",
//     },
//   ],
//   done: [
//     {
//       title: "Design System",
//       description: "It just needs to adapt the UI from what you did before.",
//       priority: "Completed",
//       comments: 5,
//       files: 2,
//       users: ["https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
//       status: "Done",
//     },
//   ],
// };

// const MobileApp = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Mobile App</h1>
//       <div className="flex space-x-4">
//         {/* To Do Column */}
//         <div className="w-1/3">
//           <h2 className="text-lg font-semibold mb-3">To Do</h2>
//           {taskData.todo.map((task, index) => (
//             <Card key={index} {...task} />
//           ))}
//         </div>

//         {/* In Progress Column */}
//         <div className="w-1/3">
//           <h2 className="text-lg font-semibold mb-3">In Progress</h2>
//           {taskData.inProgress.map((task, index) => (
//             <Card key={index} {...task} />
//           ))}
//         </div>

//         {/* Done Column */}
//         <div className="w-1/3">
//           <h2 className="text-lg font-semibold mb-3">Done</h2>
//           {taskData.done.map((task, index) => (
//             <Card key={index} {...task} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileApp;


import React from "react";
import Card from "../Cards";

const taskData = {
  todo: [
    {
      title: "Brainstorming",
      description: "Brainstorming brings team members' diverse experience into play.",
      priority: "Low",
      comments: 12,
      files: 0,
      users: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964",
        "https://plus.unsplash.com/premium_photo-1664541337092-81ad747fc1f6?q=80&w=2070",
        "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=1888"
      ],
      status: "To Do",
    },
    {
      title: "Research",
      description: "User research helps you to create an optimal product for users.",
      priority: "High",
      comments: 10,
      files: 3,
      users: [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887"
      ],
      status: "To Do",
    },
    {
      title: "Planing",
      description: "User  Planing helps you to create an optimal product for users.",
      priority: "High",
      comments: 10,
      files: 3,
      users: [
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887"
      ],
      status: "To Do",
    },
  ],
  inProgress: [
    {
      title: "Wireframes",
      description: "Low fidelity wireframes include the most basic content and visuals.",
      priority: "High",
      comments: 8,
      files: 1,
      users: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964"
      ],
      status: "In Progress",
    },
    {
      title: "Rendering",
      description: "Low fidelity include the most basic content and visuals.",
      priority: "High",
      comments: 8,
      files: 1,
      users: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887",
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964"
      ],
      status: "In Progress",
    },
  ],
  done: [
    {
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before.",
      priority: "Completed",
      comments: 5,
      files: 2,
      users: [
        "https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?q=80&w=1888"
      ],
      status: "Done",
    },
    {
      title: "",
      description: "It just needs to adapt the UI from what you did before.",
      priority: "Completed",
      comments: 5,
      files: 2,
      users: [
        "https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?q=80&w=1888"
      ],
      status: "Done",
    },
  ],
  done: [
    {
      title: "Website",
      description: "It just needs to adapt the UI from what you did before.",
      priority: "Completed",
      comments: 5,
      files: 2,
      users: [
        "https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?q=80&w=1888"
      ],
      status: "Done",
    },
    {
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before.",
      priority: "Completed",
      comments: 5,
      files: 2,
      users: [
        "https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?q=80&w=1888"
      ],
      status: "Done",
    },
  ],

 };

const MobileApp = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      

    
      <main className="flex-1 flex flex-col">
        
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mobile App</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ Add Task</button>
        </header>

      
        <div className="p-6 flex flex-1 space-x-6 overflow-x-auto">
      
          <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">To Do</h2>
            {taskData.todo.map((task, index) => (
              <Card key={index} {...task} />
            ))}
          </div>

          
          <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">In Progress</h2>
            {taskData.inProgress.map((task, index) => (
              <Card key={index} {...task} />
            ))}
          </div>

          
          <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Done</h2>
            {taskData.done.map((task, index) => (
              <Card key={index} {...task} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileApp;
