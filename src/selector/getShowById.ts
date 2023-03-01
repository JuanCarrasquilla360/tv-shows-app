import { useSelector } from "react-redux";

export const GetShowById = (id: string) => {

    const {tvShows, movies}: {tvShows: Array<any>, movies: Array<any>} = useSelector((state: any) => state.shows);

    return tvShows.concat(movies).find(show => show.id === id)
}
