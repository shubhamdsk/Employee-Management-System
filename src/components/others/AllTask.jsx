import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-2 rounded mt-2 h-44 overflow-auto ">
      <div className="bg-red-500 mb-2 px-4 py-2 rounded flex justify-between items-center ">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h5 className="text-lg font-medium w-1/5">New Task</h5>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      {userData?.map((user) => {
        return (
          <div
            className={` border-2  border-emerald-400 py-1 px-3 flex justify-between rounded mb-2`}
            key={user.id}
          >
            <h5 className="text-sm font-medium w-1/5 ">{user.firstName}</h5>
            <h5 className="text-sm font-medium w-1/5 text-fuchsia-600">
              {user?.taskCounts?.newTask}
            </h5>
            <h5 className="text-sm font-medium w-1/5 text-blue-500">
              {user?.taskCounts?.active}
            </h5>
            <h5 className="text-sm font-medium w-1/5 text-green-500">
              {user?.taskCounts?.completed}
            </h5>
            <h5 className="text-sm font-medium w-1/5 text-red-500">
              {user?.taskCounts?.failed}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
