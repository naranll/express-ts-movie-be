import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { MovieType } from "@/utils/Types";


export default function Movie(): JSX.Element {
    const [movie, setMovie] = useState<MovieType | null>(null);
    const { query } = useRouter();

    useEffect(() => {
        if (query.id) {
            axios.get(`http://localhost:7100/movie/${query.id}`)
                .then((res) => setMovie(res.data))
                .catch(() => console.log("err"))
        }

    }, [query.id])

    return <div className="w-screen h-screen flex flex-col bg-black text-white border-solid border-black">
        {movie && (<>
            <picture >
                <img src={movie.poster} alt={movie.title} className="border-solid border-white w-96 h-48 object-contain" />
            </picture>
            <h4>{movie.title}</h4>
            <h4>{movie.plot}</h4>
        </>
        )}
    </div>
}