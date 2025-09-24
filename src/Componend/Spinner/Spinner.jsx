import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-2 mt-[380px]" >
      <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-blue-600 font-medium">Loading...</p>
    </div>
  );
};

export default Spinner;
