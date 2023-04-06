import { MovieType } from "@/utils/Types";


export default function Card({ poster, title, tomatoes }: MovieType): JSX.Element {

    // function clickHandler(): void {
    //     console.log("id", movie._id);
    //     axios.post("http://localhost:7100/", { id: movie._id })
    //         .then((res) => console.log(res.data));
    // }

    return <div className="w-48 h-84 border-solid border-2 border-black" >
        <picture>
            <img src={poster} alt={title} />
        </picture>
        <h6>{tomatoes.viewer.rating}</h6>
        <h4>{title}</h4>
    </div>
}



/* METHOD 1*/
// type MovieType = {
//     title: string;
//     genres: string[];
//     year: number;
// }

// export default function Card({ title, genres, year }: MovieType): JSX.Element {
//     // console.log("title", title);

//     return <div className="w-48 h-64 border-solid border-2 border-black">
//         <h4 className="text-black">{title}</h4>
//         <h6>Genres: {genres}</h6>
//         <h6>Year: {year}</h6>
//     </div>
// }


// return <div className="w-48 h-84 border-solid border-2 border-black bg-[#121212] text-white" onClick={clickHandler}>
//     //     {/* <Image src={movie.poster} alt={movie.title} width= /> */}
//     //     <picture>
//     //         <img src={movie.poster} alt={movie.title} className="w-48 h-64 rounded" />
//     //     </picture>
//     //     <h6>{movie.tomatoes.viewer.rating}</h6>
//     //     <h4 >{movie.title}</h4>
//     // </div>