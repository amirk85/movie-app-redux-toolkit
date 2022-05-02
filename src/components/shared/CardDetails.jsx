import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import "./CardDetails.css";
import {
  getCardDetailsAsync,
  getSeasonsAsync,
  REMOVE_CARD_DETAIL,
} from "../../context/global-slice";

export default function CardDetails() {
  const cardDetails = useSelector((state) => state.global.cardDetails);

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
  } = cardDetails;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCardDetailsAsync(id));
    dispatch(getSeasonsAsync(id));
    return () => {
      dispatch(REMOVE_CARD_DETAIL());
    };
  }, [dispatch, id]);

  return (
    <div>
      {Object.keys(cardDetails).length === 0 ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div className="movie_section">
          <div className="section_left">
            <div className="movie_title">{Title}</div>
            <Link to="/season" className="movie_title">
              Seasons
            </Link>
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
              <span>Year : {imdbRating}</span>
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
      )}
    </div>
  );
}
