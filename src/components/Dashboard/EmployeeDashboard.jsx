import Header from "../others/Header";
import TaskNumber from "../others/TaskNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {
  console.log({ props });
  return (
    <div className="p-7 bg-[#1C1C1C] h-screen ">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
