import express, { Request, Response } from "express";

const taskRouter = express.Router()

taskRouter.get('', async (req: Request, res: Response) => {
    try {
        res.status(200).json({Message: "Hello from task"})
    } catch {
        res.status(400).send({'Nothing here': String});
    }
}); 

export default taskRouter;