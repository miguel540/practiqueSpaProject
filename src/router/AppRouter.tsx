import { Navigate, Route, Routes } from 'react-router-dom';
import { PaisesPage } from '../pages/PaisesPage';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { Navbar } from '../components/Navbar';
import { Abaut } from '../pages/Abaut';

export const AppRouter = () => {
  return (
    <>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="paises" element={<PaisesPage />} />
        <Route path="abaut" element={<Abaut></Abaut>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};