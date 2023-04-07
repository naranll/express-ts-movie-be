import Card from "@/components/Card";
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { MovieType } from "@/utils/Types";
import Link from "next/link";

export default function Home(props: { movies: Array<MovieType> }): JSX.Element {
  const { movies } = props;
  // export default function Home(): JSX.Element {
  // const [movies, setMovies] = useState<MovieType[] | null>(null);

  // useEffect(() => {
  //   function getMovies(): void {
  //     console.log("axios function");
  //     axios
  //       .get("http://localhost:7100/movies")
  //       .then((res) => {
  //         // console.log(res.data);
  //         setMovies(res.data.movies);
  //       })
  //       .catch(() => console.log("err catching res"))
  //   }
  //   getMovies()
  // }, []);

  return (
    <>
      {movies.map((movie: MovieType, i: number) => (
        <Link href={`/movie/${movie._id}`} key={i}>
          <Card {...movie} />
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:7100/movies");
    const movies = await res.json();
    return {
      props: {
        movies: movies,
      },
    };
  // try {
  //   const res = await fetch("http://localhost:7100/movies");
  //   const movies = await res.json();
  //   return {
  //     props: {
  //       movies: movies,
  //     },
  //   };
  // } catch (error) {
  //   return {
  //     props: {
  //       msg: "none",
  //     },
  //   };
  // }
}

// const API_URL = 'http://localhost:7100/movies';
// export async function fetchData() {
//   const response = await fetch(API_URL)
//   const data= await response.json();
//   return data;
// }
