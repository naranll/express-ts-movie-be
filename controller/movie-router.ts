import express, { Express, Router, Request, Response } from 'express';
import Movie from '../models/Movie';

const movieRouter: Router = express.Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
    const movies = await Movie.find({ poster: { $exists: true } }).limit(10);

    res.status(200).send({ movies: movies });
    // res.status(404).send({ msg: "not connecting" });
});

movieRouter.post("/", async (req: Request, res: Response) => {
    console.log("res");
    console.log("id", req.body);
    res.send({ movieId: req.body.id })
})

movieRouter.get("/movie/:id", async (req: Request, res: Response) => {
    // console.log("req", req.params.id);
    const movie = await Movie.findOne({ _id: req.params.id }).limit(1);
    res.send(movie);
})

export default movieRouter;