import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { APIKey } from "../../common/apis/MovieApiKey";
// import movieApi from "../../common/apis/movieApi";

// export const fetchAsyncMovies = createAsyncThunk(
//   "movies/fetchAsyncMovies",
//   async (term) => {
//     const res = await movieApi
//       .get(`?apikey=${APIKey}&s=${term}&type=movie`)
//       .catch((err) => console.log(err));
//     return res.data;
//   }
// );

const initialState = {
  movies: {},
  //   shows: {},
  //   selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      console.log(payload[0].id);
      state.movies = payload;
    },
    // removeSelectedMovieOrShow: (state, { payload }) => {
    //   state.selectMovieOrShow = {};
    // },
  },
  extraReducers: {
    // [fetchAsyncMovies.pending]: () => {
    //   console.log("pending");
    // },
    // [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
    //   console.log("Fetch Success Movies");
    //   return { ...state, movies: payload };
    // },
    // [fetchAsyncMovies.rejected]: () => {
    //   console.log("rejected");
    // },
    // [fetchAsyncShows.fulfilled]: (state, { payload }) => {
    //   console.log("Fetch Success Shows");
    //   return { ...state, shows: payload };
    // },
    // [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
    //   console.log("Fetch Success MovieOrShow");
    //   return { ...state, selectMovieOrShow: payload };
    // },
  },
});

export const { addMovies } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
