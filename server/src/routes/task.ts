import express, { Request, Response, response } from "express";
import { loadTasks } from '../controllers/task-controller'

const taskRouter = express.Router()

taskRouter.get('', async (req: Request, res: Response) => {
    try {
        console.log(loadTasks())
        res.status(200).send(await loadTasks())
    } catch {
        res.status(400).send({'Nothing here': String});
    }
}); 

export default taskRouter;