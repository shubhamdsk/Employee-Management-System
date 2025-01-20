import Header from "../others/Header";
import TaskNumber from "../others/TaskNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log({ data })
  return (
    <div className="p-7 bg-[#1C1C1C] h-screen ">
      <Header user={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
