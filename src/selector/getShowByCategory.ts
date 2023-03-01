import { useSelector } from "react-redux";

export const getShowByCategory = (category: string) => {
    const resp = useSelector((state: any) => state.shows);
    return resp[category]
}
