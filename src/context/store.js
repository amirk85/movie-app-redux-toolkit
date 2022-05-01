import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./show-slice";
import movieReducer from "./movie-slice";

export const store = configureStore({
  reducer: { shows: showReducer, movies: movieReducer },
});
