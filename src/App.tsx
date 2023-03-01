import Layout from "./components/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getMovies, getTvShows } from "./store/movies/movieSlice";
import axiosDataInstance from "./helpers/axiosData";
import { AppRouter } from "./router/AppRouter";

function App() {

  const dispatch = useDispatch();

    useEffect(() => {
        axiosDataInstance.get('discover/movie', {
            params: { "api_key": "c889e3895422bc17e036adac89f11d29" }
        }).then(movie => {
            dispatch(getMovies([...movie.data.results]))
        })
        axiosDataInstance.get('discover/tv', {
            params: { "api_key": "c889e3895422bc17e036adac89f11d29" }
        }).then(movie => {
            dispatch(getTvShows([...movie.data.results]))
        })
    })

  return (
    <AppRouter/>
  );
}

export default App;
