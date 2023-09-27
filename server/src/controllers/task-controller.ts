import { saveTaskData, loadTasksData } from "../models/task-repository";
import { TaskItem } from "@task-tracker/shared";

const loadTasks = async (): Promise<TaskItem[]> => {
  return await loadTasksData()
/*   try {
  } catch {
    throw new Error('Error loading tasks')
  } */
};

const saveTask = async (task: TaskItem): Promise<TaskItem | null> => {
  try {
    return await saveTaskData(task)
  } catch {
    throw new Error('Error saving task')
  }
}

export { loadTasks, saveTask };
