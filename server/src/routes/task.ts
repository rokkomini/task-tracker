import express, { Request, Response, response } from 'express';
import {
  loadTasks,
  saveTask,
  updateTask,
} from '../controllers/task-controller';
import { TaskItem } from '@task-tracker/shared';

const taskRouter = express.Router();

taskRouter.get('', async (req: Request, res: Response) => {
  try {
    console.log(loadTasks());
    res.status(200).send(await loadTasks());
  } catch {
    res.status(400).send({ 'Nothing here': String });
  }
});

taskRouter.post('', async (req: Request<TaskItem>, res: Response) => {
  const task = req.body.task;
  if (task != '') {
    try {
      console.log('req.body', req.body);
      res.status(201).send(await saveTask(req.body));
    } catch {
      res.status(400).send({ 'Nothing here': String });
    }
  } else {
    return console.log('task cannot be empty string');
  }
});

taskRouter.patch('/:taskId', async (req: Request, res: Response) => {
  const taskId = req.params.taskId;
  const task = req.body;
  try {
    console.log(req.body);
    res.status(201).send(await updateTask(taskId, task));
  } catch {
    res.status(400).send({ 'Something went wrong': String });
  }
});

export default taskRouter;
