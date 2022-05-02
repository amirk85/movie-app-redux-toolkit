import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../APIs/MovieAPI";

const initialState = {
  moviesData: [],
};

export const getAllMoviesAsync = createAsyncThunk(
  "movies/getAllMoviesAsync",
  async () => {
    const { data } = await axios.get(`${BASE_URL}s=Avengers&type=movie`);
    return data.Search;
  }
);

export const getSearchedMoviesAsync = createAsyncThunk(
  "movies/getSearchedMoviesAsync",
  async (input) => {
    const { data } = await axios.get(`${BASE_URL}s=${input}&type=movie`);
    return data.Search;
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

    [getSearchedMoviesAsync.fulfilled](state, { payload }) {
      state.moviesData = payload;
    },
  },
});

export const MOVIES_DATA = (state) => state.movies.moviesData;
export default movieSlice.reducer;
