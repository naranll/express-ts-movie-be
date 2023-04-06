import Types from "mongoose"

export type MovieType = {
    _id: Types.ObjectId;
    poster: string;
    title: string;
    plot?: string;
    tomatoes: {
        viewer: {
            rating: number;
        }
    }
}