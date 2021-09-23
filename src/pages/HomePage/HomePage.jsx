import debounce from 'lodash.debounce';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import Footer from '../../components/footer/footer';
import { useEffect, useState } from 'react';
import { getTrendingList } from '../../utils/getTrendingList';
import { getFilms } from '../../utils/getFilms';

export default function HomePage() {
  const [quary, setQuary] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingList(page).then(data => {
      setMovies([...data]);
    });
  }, [page]);

  useEffect(() => {
    if (quary.length > 0) {
      getFilms(quary, page).then(data => {
        setMovies([...data]);
      });
    }
  }, [quary]);

  const handleChange = quary => {
    setQuary(quary);
  };

  return (
    <>
      <Header onChangeQuary={handleChange} />
      <Gallery movies={movies} />
      <Footer />
    </>
  );
}
