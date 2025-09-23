import React from "react";

const CounterButton = () => {
  return (
    <div className=" max-w-[1340px] mx-auto mt-15 flex justify-end gap-2">
      <div className=" bg-purple-100 rounded-lg text-md font-medium">
          <button className="px-4 py-2 ">All</button>
        <button className="px-4 py-2 ">Pending</button>
        <button className="px-4 py-2 ">Submitted</button>
        <button className="px-4 py-2 ">Reviewed</button>
      </div>
    </div>
  );
};

export default CounterButton;
