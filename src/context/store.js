import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./show-slice";
import movieReducer from "./movie-slice";
import globalReducer from "./global-slice";

export const store = configureStore({
  reducer: { shows: showReducer, movies: movieReducer, global: globalReducer },
});
