"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../config/mongoose-config");
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    title: String,
    _id: mongoose_1.default.Types.ObjectId,
}, {
    collection: "movies",
});
const Movie = mongoose_1.default.model("Movie", movieSchema, "movies");
exports.default = Movie;
