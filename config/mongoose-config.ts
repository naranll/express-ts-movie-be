import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db: undefined | string = process.env.MOVIE_URL;
const myConnection = mongoose.connect(`${db}`);

export default mongoose.connection;