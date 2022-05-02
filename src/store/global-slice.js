import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../APIs/MovieAPI";

const initialState = {
  seasonData: {},
  cardDetails: {},
};

export const getCardDetailsAsync = createAsyncThunk(
  "cards/getCardDetailsAsync",
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}i=${id}&Plot=full`);
    return data;
  }
);

export const getSeasonsAsync = createAsyncThunk(
  "seasons/getSeasonDetailsAsync",
  async (title) => {
    const { data } = await axios.get(`${BASE_URL}i=${title}&Season=1`);
    return data;
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    REMOVE_CARD_DETAIL(state) {
      state.cardDetails = {};
    },
  },
  extraReducers: {
    [getCardDetailsAsync.fulfilled](state, { payload }) {
      return { ...state, cardDetails: payload };
    },
    [getSeasonsAsync.fulfilled](state, { payload }) {
      state.seasonData = payload;
    },
  },
});

export const { REMOVE_CARD_DETAIL } = globalSlice.actions;
export default globalSlice.reducer;
