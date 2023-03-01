import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/Login';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {

  return (


    <Routes>

      <Route path="/login" element={<LoginScreen />} />

      <Route path="/*" element={<DashboardRoutes />} />

    </Routes>

  )
}
