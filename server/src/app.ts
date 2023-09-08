import express, {
    Application,
    Express,
    json,
    Request,
    Response,
} from "express";
import taskRouter from "./routes/task";
import { setupMongoDb } from "./models/common";

import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "8800");

app.use(cors()); 
app.use(json());

app.use('/', taskRouter)

/* app.get("/", (req: Request, res: Response) => {
    res.json({ Message: "Hello Stupid World!" });
}); */


const MONGO_URL: string = process.env.MONGO_URL || 'mongodb://localhost:27017/task-tracker'


app.listen(PORT, async () => {
    await setupMongoDb(MONGO_URL)
    console.log(`Server running on port: ${PORT}`);
});