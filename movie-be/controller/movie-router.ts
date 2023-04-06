import express, { Express, Router, Request, Response } from 'express';
import Movie from '../models/Movie';

const movieRouter: Router = express.Router();

movieRouter.get("/movies", async (req: Request, res: Response) => {
    try {
        const movies = await Movie.find({ poster: { $exists: true } }).limit(12).select({ title: 1, _id: 1, poster: 1, tomatoes: 1 });
        res.status(200).send(movies);
    } catch (error) {
        res.status(404).send({ msg: "could not fetch data" })
    }
});

movieRouter.get("/btns", async (req: Request, res: Response) => {
    console.log(req.query);

})

movieRouter.get("/movie/:id", async (req: Request, res: Response) => {
    const movie = await Movie.findOne({ _id: req.params.id }).limit(1);
    res.send(movie);
})

export default movieRouter;