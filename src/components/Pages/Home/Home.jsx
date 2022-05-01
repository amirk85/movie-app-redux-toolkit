import React from "react";
import MovieList from "../../Movies/MovieList/MovieList";
import SeriesList from "../../Series/ShowList";

export default function Home() {
  return (
    <div>
      <MovieList />
      <SeriesList />
    </div>
  );
}
