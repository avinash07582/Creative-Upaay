import React from "react";
import { MessageSquare, FileText, Circle } from "lucide-react";

const Card = ({ title, description, priority, comments, files, users, status }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
    
      <div className="flex justify-between items-center">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            priority === "High" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {priority}
        </span>
        <Circle
          size={14}
          className={`${
            status === "To Do"
              ? "text-purple-500"
              : status === "In Progress"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        />
      </div>

      
      <h3 className="mt-2 font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>

    
      <div className="flex items-center justify-between mt-3">
        <div className="flex -space-x-2">
          {users.map((user, index) => (
            <img
              key={index}
              src={user}
              alt="user"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="flex items-center text-gray-400 text-xs space-x-3">
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center">
            <FileText size={14} className="mr-1" />
            <span>{files}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
