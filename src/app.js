import express from "express";
import productRouter from "./routers/productRouter"
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use(morgan("tiny"));

//Connect db
connectDB(process.env.DB_URL);

//Router
app.use("/api", productRouter);


export const viteNodeApp = app;