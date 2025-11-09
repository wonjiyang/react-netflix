import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaStar, FaFire, FaChild, FaExclamationTriangle } from 'react-icons/fa';
import './MovieCard.style.css';

const GENRE_MAP = {
  28: '액션',
  12: '모험',
  16: '애니메이션',
  35: '코미디',
  80: '범죄',
  99: '다큐멘터리',
  18: '드라마',
  10751: '가족',
  14: '판타지',
  36: '역사',
  27: '공포',
  10402: '음악',
  9648: '미스터리',
  10749: '로맨스',
  878: 'SF',
  10770: 'TV 영화',
  53: '스릴러',
  10752: '전쟁',
  37: '서부',
};

function MovieCard({ movie }) {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // 장르 이름 변환
  const genres = movie.genre_ids
    .slice(0, 2)
    .map((id) => GENRE_MAP[id] || '기타');

  return (
    <div className="netflix-card">
      <img src={imgUrl} alt={movie.title} className="netflix-card-img" />
      <div className="netflix-card-overlay">
        <h5 className="netflix-card-title">{movie.title}</h5>

        <div className="netflix-card-badges">
          {genres.map((genre, idx) => (
            <Badge key={idx} bg="danger" className="me-1">
              {genre}
            </Badge>
          ))}
        </div>

        <div className="netflix-card-info">
          <p>
            <FaStar /> {movie.vote_average.toFixed(1)}
          </p>
          <p>
            <FaFire /> {Math.round(movie.popularity)}
          </p>
          <p>
            {movie.adult ? (
              <>
                <FaExclamationTriangle /> 성인
              </>
            ) : (
              <>
                <FaChild /> 전체관람가
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
