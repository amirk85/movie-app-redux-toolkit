import React from "react";
import MovieList from "../../Movies/MovieList";
import ShowList from "../../Shows/ShowList";
import { useSelector } from "react-redux";
import { MOVIES_DATA } from "../../../store/movie-slice";

export default function Home() {
  const movieData = useSelector(MOVIES_DATA);
  console.log(movieData);

  return (
    <>
      <main>
        <MovieList />
        <ShowList />
      </main>
    </>
  );
}
