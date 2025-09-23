import React from "react";

const Display = ({ person }) => {
  console.log(person);

  return (
    <div className="bg-gray-200 rounded-xl shadow-md p-4 flex flex-col h-[200px] w-full">
      {/* User Image + Name */}
      <div className="flex items-center gap-3 mb-4">
        <img
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={person.userImg}
          alt={person.requestedBy}
        />
        <p className="text-lg font-semibold">{person.requestedBy}</p>
      </div>

      {/* Subject + Tags */}
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-xl">{person.subject}</p>
        <div className="flex gap-2">
          <span className="text-sm font-medium px-3 py-1 rounded-lg bg-yellow-400 shadow">
            {person.priority}
          </span>
          <span className="text-sm font-medium px-3 py-1 rounded-lg bg-green-400 shadow">
            {person.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm overflow-hidden">
        {person.description}
      </p>
    </div>
  );
};

export default Display;
