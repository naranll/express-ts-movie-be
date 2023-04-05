"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Movie_1 = __importDefault(require("../models/Movie"));
const movieRouter = express_1.default.Router();
movieRouter.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield Movie_1.default.find({ poster: { $exists: true } }).limit(10);
    res.status(200).send({ movies: movies });
    // res.status(404).send({ msg: "not connecting" });
}));
movieRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("res");
    console.log("id", req.body);
    res.send({ movieId: req.body.id });
}));
movieRouter.get("/movie/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("req", req.params.id);
    const movie = yield Movie_1.default.findOne({ _id: req.params.id }).limit(1);
    res.send(movie);
}));
exports.default = movieRouter;
