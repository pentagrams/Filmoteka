import { KEY, BASE_URL } from './constants';

export async function fetchTrendingMovie(page) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error;
  }
}

export async function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
  } catch (error) {
    return error;
  }
}

export async function fetchFilm(searchQuery, page) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error;
  }
}
