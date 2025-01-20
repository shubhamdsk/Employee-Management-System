import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-9 py-6  w-[40%] bg-red-400 rounded-xl">
        <h2 className="text-2xl font-medium">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-blue-400 rounded-xl">
        <h2 className="text-2xl font-medium">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-yellow-400 rounded-xl">
        <h2 className="text-2xl font-medium">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-semibold">Active Task</h3>
      </div>
      <div className="px-9 py-6  w-[40%] bg-pink-400 rounded-xl">
        <h2 className="text-2xl font-medium">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
