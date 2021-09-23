import PropTypes from 'prop-types';
import defaultImg from './img.jpg';
import './movieCard.scss';

export default function MovieCard({ id, title, poster, releaseDate, genres }) {
  return (
    <li className="movie-card">
      <img
        className="movie-card__poster"
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg}
        alt={title}
        id={id}
      />
      <h2 className="movie-card__title">{title}</h2>
      <div className="movie-card__info">
        <ul className="movie-card__genres">
          {genres.map(ganre => (
            <li key={ganre.id}> {ganre.name} </li>
          ))}
        </ul>

        <div className="movie-card__release-data">{releaseDate}</div>
      </div>
    </li>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  releaseDate: PropTypes.string,
  genres: PropTypes.array,
};
