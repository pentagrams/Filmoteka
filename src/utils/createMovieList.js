import { fetchGenres } from '../api/api';

export async function createMovieList(movies) {
  try {
    const genres = await fetchGenres();
    return movies.map(movie => ({
      ...movie,
      release_date: movie.release_date.split('-')[0],
      genres: movie.genre_ids
        .map(id => genres.filter(genre => genre.id === id))
        .flat(),
    }));
  } catch (error) {
    return error;
  }
}
