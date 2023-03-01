import { Routes, Route } from 'react-router-dom';
import { Details } from '../components/Detail';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Movies } from '../pages/Movies';
import { TvShow } from '../pages/TvShows';


export const DashboardRoutes = () => {
    return (
        <>
            <div className="container">
                <Navigation />
                <Routes>
                    <Route path="tv-shows" element={<TvShow />} />
                    <Route path="movies" element={<Movies />} />

                    <Route path="show/:showId" element={<Details />} />

                    <Route path="/" element={<Movies />} />

                </Routes>
                <Footer />
            </div>
        </>
    )
}
