import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="h-[55%] flex items-center justify-start gap-5 overflow-x-auto mt-10 w-full py-5 px-1 flex-nowrap rounded-xl"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-cyan-700 px-4 py-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Make your Youtube Video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.</p>
      </div>
    </div>
  );
};

export default TaskList;
