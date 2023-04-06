import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieType } from '@/utils/Types';
import Link from 'next/link';


export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    function getMovies(): void {
      console.log("axios function");
      axios
        .get("http://localhost:7100/movies")
        .then((res) => {
          // console.log(res.data);
          setMovies(res.data.movies);
        })
        .catch(() => console.log("err catching res"))
    }
    getMovies()
  }, []);




  return (<>
    {movies &&
      movies.map((movie, i) =>
        <Link href={`/movie/${movie._id}`} key={i}>
          <Card {...movie} />
        </Link>
      )
    }
  </>
  )
}
