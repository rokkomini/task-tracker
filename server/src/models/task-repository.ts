import { TaskItem } from '@task-tracker/shared';
import { model, Schema } from 'mongoose';

const TaskSchema = new Schema(
  {
    task: { type: String, require: true},
    status: { type: String, default: 'todo' },
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
	console.log('save to db', taskItem) 
  const newTask = new TaskModel(taskItem);
  // const timestamp = new Date().toString()
  newTask.created = new Date().toString()
  // newTask.task = taskItem
  return await newTask.save();
};

const loadTasksData =async (): Promise<TaskItem[]> => {
	return await TaskModel.find({}).exec()
}


export { saveTaskData, loadTasksData };
