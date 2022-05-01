import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetailsAsync } from "../../../context/movie-slice";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import "./MovieDetails.css";

export default function MovieDetails() {
  const movieDetail = useSelector((state) => state.movies.movieDetail);

  console.log(movieDetail);
  const {
    Title,
    imdbRating,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = movieDetail;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetailsAsync(id));
  }, [dispatch, id]);

  return (
    <div className="movie_section">
      <div className="section_left">
        <div className="movie_title">{Title}</div>
        <div className="movie_rating">
          <span>
            IMDB Rating <StarIcon /> : {imdbRating}
          </span>
          <span>
            IMDB Votes <ThumbUpAltIcon /> : {imdbRating}
          </span>
          <span>
            RunTime
            <MovieIcon /> : {imdbRating}
          </span>
          <span>Year   : {imdbRating}</span>
          <div className="movie_plot">{Plot}</div>
          <div className="movie_info">
            <div>
              <span>Director</span>
              <span>{Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{Actors}</span>
            </div>
            <div>
              <span>Genre</span>
              <span>{Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{Awards}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section_right">
        <img src={Poster} alt={Title} />
      </div>
    </div>
  );
}
