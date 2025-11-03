import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
