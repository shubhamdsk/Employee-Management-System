import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold  ">
        Hello <br />
        <span className="text-3xl">Shubham 👋🏻</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-3 py-1 rounded-sm">Log Out</button>
    </div>
  );
};

export default Header;
