import React from "react";

const tasks = [
  {
    id: 1,
    priority: "High",
    date: "20 Feb 2024",
    title: "Make your Youtube Video",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-cyan-700",
  },
  {
    id: 2,
    priority: "High",
    date: "20 Feb 2024",
    title: "Complete React Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-green-700",
  },
  {
    id: 3,
    priority: "High",
    date: "22 Feb 2024",
    title: "Design a Website Layout",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-sky-900",
  },
  {
    id: 4,
    priority: "High",
    date: "23 Feb 2024",
    title: "Update Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-slate-700",
  },
  {
    id: 5,
    priority: "High",
    date: "25 Feb 2024",
    title: "Prepare for Interview",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-orange-600",
  },
  {
    id: 6,
    priority: "High",
    date: "28 Feb 2024",
    title: "Learn New JavaScript Features",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, commodi. Eaque labore cumque nihil quo.",
    color: "bg-emerald-800",
  },
];

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="h-[55%] flex items-center justify-start gap-5 overflow-x-auto mt-10 w-full py-5 px-1 flex-nowrap rounded-xl"
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex-shrink-0 h-full w-[300px] ${task.color} px-4 py-5 rounded-xl`}
        >
          <div className="flex justify-between items-center">
            <h3 className="bg-fuchsia-500 text-sm px-3 py-1 rounded">
              {task.priority}
            </h3>
            <h4 className="text-sm">{task.date}</h4>
          </div>
          <h2 className="mt-4 text-2xl font-semibold">{task.title}</h2>
          <p className="text-sm mt-2">{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
