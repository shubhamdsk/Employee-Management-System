import React from "react";

const TaskNumber = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-9 py-6  w-[40%] bg-red-400 rounded-xl">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-blue-400 rounded-xl">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-yellow-400 rounded-xl">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-pink-400 rounded-xl">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
