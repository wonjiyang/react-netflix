import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import GenreMovieSlide from './components/Genres/GenreMovieSlide'; // 통합 장르 컴포넌트

function HomePage() {
  return (
    <div>
      <Banner testMode={false} />
      <PopularMovieSlide />
      <GenreMovieSlide /> {/* Comedy, Action, Drama 모두 포함 */}
    </div>
  );
}

export default HomePage;
