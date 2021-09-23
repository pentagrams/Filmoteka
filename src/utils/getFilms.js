import { createMovieList } from './createMovieList';
import { fetchFilm } from '../api/api';

export async function getFilms(quary, page) {
  const movies = await fetchFilm(quary, page);
  const data = await createMovieList(movies);

  return data;
}
