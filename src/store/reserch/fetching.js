import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
  loading: false,
  data: null,
  category: null,
  error: null,
  isLogged: false,
};

export const getCategory = createAsyncThunk("fetch/getCategory", async () => {
  try {
    const res = await axios.get("http://localhost:7800/home/category");
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
        state.error = null;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchSlice.reducer;
