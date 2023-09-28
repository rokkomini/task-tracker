import { TaskItem, TaskStatus } from '@task-tracker/shared';
import { model, Schema } from 'mongoose';

const TaskSchema = new Schema(
  {
    task: { type: String, require: true},
    status: { type: String, default: TaskStatus.todo },
    created: { type: String },
    modified: { type: String }
  },
  {
    timestamp: { type: Date, default: Date.now },
    collection: 'tasks',
  }
);

const TaskModel = model<TaskItem>('TaskItem', TaskSchema);

const saveTaskData = async (taskItem: TaskItem): Promise<TaskItem | null> => {
  const newTask = new TaskModel(taskItem);
  newTask.created = new Date().toString()
  return await newTask.save();
};

const loadTasksData =async (): Promise<TaskItem[]> => {
	return await TaskModel.find({}).exec()
}

const updateTaskData = async (taskId : string, task : TaskItem): Promise<TaskItem | null> => {
  return await TaskModel.findByIdAndUpdate(taskId, {
    task: task.task,
    status: task.status,
    created: task.created,
    modified: new Date().toString()
  })
}

export { saveTaskData, loadTasksData, updateTaskData };
