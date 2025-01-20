import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => (
  <div
    id="taskList"
    className="h-[55%] flex items-center justify-start gap-5 overflow-x-auto mt-10 w-full py-5 px-1 flex-nowrap rounded-xl"
  >
    {
      data.tasks.map((elements, index) => {
        if (elements.active) {
          return <AcceptTask key={index} data={elements} />
        }
        if (elements.newTask) {
          return <NewTask key={index} data={elements} />

        }
        if (elements.completed) {
          return <CompleteTask key={index} data={elements} />
        }
        if (elements.failed) {
          return <FailedTask key={index} data={elements} />
        }
      })
    }
  </div>
);

export default TaskList;
