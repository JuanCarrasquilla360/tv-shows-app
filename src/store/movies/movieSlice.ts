import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "Movie",
    initialState: {
        movies: [""],
        tvShows: [""],
    },
    reducers: {
        getMovies: (state, action) => {
            state.movies = [...action.payload]
        },
        getTvShows: (state, action) => {
            state.tvShows = [...action.payload]
        },
    }
})

export const { getMovies, getTvShows } = movieSlice.actions