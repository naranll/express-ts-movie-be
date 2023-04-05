import "../config/mongoose-config";
import mongoose, { Schema, Model } from "mongoose";

const movieSchema: Schema = new mongoose.Schema({
    title: String,
    _id: mongoose.Types.ObjectId,
},
    {
        collection: "movies",
    })

const Movie = mongoose.model("Movie", movieSchema, "movies");

export default Movie;