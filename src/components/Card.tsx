import { Link } from 'react-router-dom'


export const Card = ({
    id,
    name,
    publisher,
    poster_path,
    original_title,
    overview,
    vote_average,
}: {
    id: any
    name: any
    original_title: any
    publisher: any
    poster_path: any
    overview: any
    vote_average: any
}) => {

    const imagePath = `http://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imagePath} className="card-img" alt={publisher === "movies" ? original_title: name} />
                    </div>
                    <div className="col-8">

                        <div className="card-body" style={{overflow: "auto", height: "300px"}}>

                        <h5 className="card-title">{publisher === "movies" ? original_title: name}</h5>

                        {
                            // ( alter_ego !== characters ) 
                            //     && <p className="text-muted">{ characters }</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{overview}</small>
                        </p>
                        <p className="card-text">
                            <b>Vote average</b> <small className="text-muted">{vote_average}</small>
                        </p>


                        <Link to={`/show/${publisher}-${id}`}>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>

        </div>
        </div >
    )
}
