import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-50 shadow-sm ">
      <div className="flex justify-between py-4  max-w-[1300px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Help Desk Maneaz</a>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <ul className="md:flex md:gap-5 font-medium hidden md:block">
              <li>Home</li>
              <li>Faculry</li>
              <li>Student</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className="bg-purple-600 btn-square btn-ghost px-2 py-2 rounded-md text-white font-medium">
            + New Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
