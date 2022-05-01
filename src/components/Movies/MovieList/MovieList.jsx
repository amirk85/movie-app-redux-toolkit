import Box from "@mui/system/Box";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAsync, MOVIES_DATA } from "../../../context/movie-slice";
import MovieCard from "../MovieCard/MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MovieList.css";

export default function MovieList() {
  const dispatch = useDispatch();
  const moviesData = useSelector(MOVIES_DATA);

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, [dispatch]);

  const renderMovies = moviesData.map((movie) => (
    <MovieCard key={uuidv4()} movie={movie} />
  ));

  return (
    <section>
      <h1 style={{ marginLeft: "1rem" }}>Movies</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: "1rem",
          marginTop: "1rem",
          padding: "0px 12px",
        }}
      >
        {renderMovies}
      </Box>
    </section>
  );
}
