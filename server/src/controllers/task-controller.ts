import { saveTaskData, loadTasksData, updateTaskData } from "../models/task-repository";
import { TaskItem } from "@task-tracker/shared";

const loadTasks = async (): Promise<TaskItem[]> => {
  return await loadTasksData()
};

const saveTask = async (task: TaskItem): Promise<TaskItem | null> => {
  try {
    return await saveTaskData(task)
  } catch {
    throw new Error('Error saving task')
  }
}

const updateTask =async (taskId:string, taskItem: TaskItem): Promise<TaskItem|null> => {
  try {
    return await updateTaskData(taskId, taskItem)
  } catch {
    throw new Error('cannot update task')
  }
}

export { loadTasks, saveTask, updateTask };
