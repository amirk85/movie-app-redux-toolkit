import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../APIs/MovieAPI";

const initialState = {
  moviesData: [],
  movieDetail: {},
};

export const getAllMoviesAsync = createAsyncThunk(
  "movies/getAllMoviesAsync",
  async () => {
    const { data } = await axios.get(`${BASE_URL}s=Harry&type=movie`);
    return data.Search;
  }
);

export const getMovieDetailsAsync = createAsyncThunk(
  "movies/getMovieDetailsAsync",
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}i=${id}&Plot=full`);
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMoviesAsync.fulfilled](state, { payload }) {
      state.moviesData = payload;
    },
    [getMovieDetailsAsync.fulfilled](state, { payload }) {
      return { ...state, movieDetail: payload };
    },
  },
});

// export const { GET_ALL_MOVIES } = movieSlice.actions;
export const MOVIES_DATA = (state) => state.movies.moviesData;
export default movieSlice.reducer;
