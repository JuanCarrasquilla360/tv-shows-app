import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { GetShowById } from '../selector/getShowById';



export const Details = () => {

    const { showId } = useParams();
    const navigate = useNavigate()

    console.log(showId);
    


    const idArray = showId?.split("-")

    const res: { tvShows: Array<any>, movies: Array<any> } = useSelector((state: any) => state.shows);


    // @ts-ignore
    const showSelected = res[idArray[0]] || null
    // @ts-ignore

    const show = showSelected.filter(show => show.id === +idArray[1])[0]
    console.log(show);
    
    const imagePath = `http://image.tmdb.org/t/p/w500${show.poster_path}`;
    
    const handleReturn = () => {
        navigate(-1);
    }


    if (!show) {
        
        return <Navigate to='/#' />
    }


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={imagePath}
                    alt={// @ts-ignore
                        idArray[0] === "movies" ? show.original_title: show.name}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{show.name}</h3>
                <ul className="list-group list-group-flush">
                
                    <li className="list-group-item"> <b>Title:</b> {// @ts-ignore
                    idArray[0] === "movies" ? show.original_title: show.name} </li>
                    <li className="list-group-item"> <b>Overview:</b> {show.overview} </li>
                    <li className="list-group-item"> <b>Vote Average:</b> {show.vote_average} </li>
                    <li className="list-group-item"> <b>First Appearance:</b> {
                        // @ts-ignore
                    idArray[0] === "movies" ? show.release_date: show.first_air_date} </li>
                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
