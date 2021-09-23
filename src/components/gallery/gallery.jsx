import PropTypes from 'prop-types';
import MovieCard from '../movieCard/movieCard';
import './gallery.scss';

export default function Gallery({ movies }) {
  return (
    <section className="gallery">
      <div className="container">
        <ul className="gallery__list">
          {movies.map(
            ({ id, original_title, poster_path, release_date, genres }) => {
              return (
                <MovieCard
                  key={id}
                  id={id}
                  title={original_title}
                  poster={poster_path}
                  releaseDate={release_date}
                  genres={genres}
                />
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
}

Gallery.propTypes = {
  movies: PropTypes.array,
};
