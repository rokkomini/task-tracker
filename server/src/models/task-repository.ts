import { TaskItem } from '@task-tracker/shared';
import { model, Schema } from 'mongoose';

const TaskSchema = new Schema(
  {
    task: String,
    status: {type: String, default: 'to do'},
  },
  {
    timestamp: { type: Date, default: Date.now },
    collection: 'tasks',
  }
);

const TaskModel = model<TaskItem>('TaskItem', TaskSchema);

const saveTaskData = async (taskItem: TaskItem): Promise<void> => {
	console.log('save to db', taskItem)
  const newTask = new TaskModel(taskItem);
  newTask.save();
};

const loadTasksData =async (): Promise<TaskItem[]> => {
	return await TaskModel.find({}).exec()
}


export { saveTaskData, loadTasksData };
