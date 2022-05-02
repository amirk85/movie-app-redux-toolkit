import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../APIs/MovieAPI";

const initialState = {
  showsData: [],
};

export const getAllShowsAsync = createAsyncThunk(
  "shows/getAllShowsAsync",
  async () => {
    const { data } = await axios.get(`${BASE_URL}s=Friends&type=series`);
    return data.Search;
  }
);

export const getSearchedShowsAsync = createAsyncThunk(
  "shows/getSearchedShowsAsync",
  async (input) => {
    const { data } = await axios.get(`${BASE_URL}s=${input}&type=series`);
    return data.Search;
  }
);

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllShowsAsync.fulfilled](state, { payload }) {
      state.showsData = payload;
    },
    [getSearchedShowsAsync.fulfilled](state, { payload }) {
      state.showsData = payload;
    },
  },
});

export const SHOW_DATA = (state) => state.shows.showsData;
export default showSlice.reducer;
