import {useContext} from "react"
import {TaskContext} from '../context/TaskContext'
function TaskCard({task}) {
 
  const {deleteTask} = useContext(TaskContext)

  return (
    <div className="bg-gray-500 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-900 text-sm">{task.description}</p>
      <button className="bg-red-500 py-1 px-2 rounded-md mt4 hover:bg-red-300" onClick={()=> deleteTask(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
