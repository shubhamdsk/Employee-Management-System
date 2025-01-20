import { useEffect, useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setTask({
      taskTitle,
      taskDate,
      assignTo,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: true,
      completed: false,
    });

    setTaskTitle("");
    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
  };
  useEffect(() => {
    if (task.newTask) {
      console.log(task);
    }
  }, [task]);
  return (
    <div className="p-2 bg-[#1c1c1c] mt-2 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex w-full flex-wrap items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter Task Title"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name="date"
              id="date"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              name="company"
              id="company "
              placeholder="Design,Dev,etc"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="description"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            id="description"
            rows={10}
            cols={30}
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4  w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
