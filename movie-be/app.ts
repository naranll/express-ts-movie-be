import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import movieRouter from './controller/movie-router';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
    console.log(`[server] Server running at port ${port}`);
});