import React from "react";
import MovieList from "../../Movies/MovieList";
import SeriesList from "../../Shows/ShowList";

export default function Home() {
  return (
    <div>
      <MovieList />
      <SeriesList />
    </div>
  );
}
