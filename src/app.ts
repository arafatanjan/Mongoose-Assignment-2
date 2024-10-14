import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
// import userRoutes from "./app/modules/user/user.route";

// using cors
app.use(cors());

app.get("/",(req: Request, res: Response)=>{
    res.send("hello world")
})

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/user", userRoutes);

export default app;