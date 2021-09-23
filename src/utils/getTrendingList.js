import { createMovieList } from './createMovieList';
import { fetchTrendingMovie } from '../api/api';

export async function getTrendingList(page) {
  const movies = await fetchTrendingMovie(page);
  const data = await createMovieList(movies);

  return data;
}
