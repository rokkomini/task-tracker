import express, { Request, Response, response } from "express";
import { loadTasks, saveTask } from '../controllers/task-controller'
import { TaskItem } from "@task-tracker/shared";

const taskRouter = express.Router()

taskRouter.get('', async (req: Request, res: Response) => {
    try {
        console.log(loadTasks())
        res.status(200).send(await loadTasks())
    } catch {
        res.status(400).send({'Nothing here': String});
    }
}); 

taskRouter.post('',async (req: Request<TaskItem>, res: Response,) => {
    try {
      console.log(req.body)
			res.status(201).send(await saveTask(req.body))
    } catch {
			res.status(400).send({'Nothing here': String})
		}
})	

export default taskRouter;