import express, {
    Application,
    Express,
    json,
    Request,
    Response,
} from "express";
import taskRouter from "./routes/task";

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



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});