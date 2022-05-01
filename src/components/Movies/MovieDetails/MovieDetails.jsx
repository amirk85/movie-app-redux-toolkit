import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailsAsync } from "../../../context/movie-slice";

export default function MovieDetails() {
  const movieDetail = useSelector((state) => state.movies.movieDetail);

  console.log(movieDetail);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetailsAsync(id));
  }, [dispatch, id]);

  return <div>MovieDetails</div>;
}
