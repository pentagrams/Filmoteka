import refs from './refs';
import movieGallaryCardTmpl from '../tamplates/library-gallery-card.hbs';
import spinner from './spinner';

import Pagination from 'tui-pagination';

let arrWatchedFilms = getArrWatchedFilms();
let arrQueueFilms = getArrQueueFilms();
let currentListFilms = arrWatchedFilms;
// якщо відкриваємо лібрарі, то watched активна,

refs.watchedBtn.classList.add('btn-active');
fetchMoviesFromLocalStorage(currentListFilms);

refs.watchedBtn.addEventListener('click', e => {
  e.preventDefault();
  pagination.setTotalItems(getLenght('Watched'));
  refs.queueBtn.classList.remove('btn-active');
  refs.watchedBtn.classList.add('btn-active');
  pagination.reset();
  currentListFilms = arrWatchedFilms;

  fetchMoviesFromLocalStorage(currentListFilms);
});

// якщо клацаємо на queue, то стає активною вона

refs.queueBtn.addEventListener('click', e => {
  e.preventDefault();
  pagination.setTotalItems(getLenght('Queue'));
  refs.watchedBtn.classList.remove('btn-active');
  refs.queueBtn.classList.add('btn-active');
  pagination.reset();

  currentListFilms = arrQueueFilms;

  fetchMoviesFromLocalStorage(arrQueueFilms);
});

function alertMessage() {
  const messageSorry = document.createElement('p');
  messageSorry.classList.add('library-message');
  messageSorry.textContent = 'Sorry, there are no movies';
  refs.alertMessage.innerHTML = '';
  refs.alertMessage.appendChild(messageSorry);
}

function fetchMoviesForId(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=6df9a2b88a6cdc986e05b3daaeb09968`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}

function fetchMoviesFromLocalStorage(currentListFilms, page) {
  spinner.spin(refs.loadSpinner);
  const arr = currentListFilms;
  const arrOnePage = getDataFromLocalStorage(arr, page);

  refs.libraryGallery.innerHTML = '';
  if (arr.length === 0) {
    alertMessage();
  }

  arrOnePage.map(film => {
    fetchMoviesForId(film)
      .then(results => {
        const markup = movieGallaryCardTmpl(results);

        refs.libraryGallery.insertAdjacentHTML('beforeend', markup);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        spinner.stop();
      });
  });
}

function getArrWatchedFilms() {
  if (localStorage.getItem('Watched')) {
    const arrString = localStorage.getItem('Watched');
    const arrPars = JSON.parse(arrString);
    return (arrWatchedFilms = [...arrPars]);
  }
  return [];
}

function getArrQueueFilms() {
  if (localStorage.getItem('Queue')) {
    const arrString = localStorage.getItem('Queue');
    const arrPars = JSON.parse(arrString);
    return (arrQueueFilms = [...arrPars]);
  }
  return [];
}
const options = {
  totalItems: getLenght(),
  itemsPerPage: 9,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: "<button id='page' class='tui-page-btn page-btn'>{{page}}</button>",
    currentPage:
      '<button id="page" class="tui-page-btn tui-is-selected active-page-btn">{{page}}</button>',
    moveButton:
      '<button id="page" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    moreButton:
      '<button id="page" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</button>',
    disabledMoveButton:
      '<button id="page" class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<button  class="tui-ico-{{type}}">{{type}}</button>' +
      '</button>',
  },
};
function getLenght(currentList = 'Watched') {
  const array = JSON.parse(localStorage.getItem(currentList));
  return array.length;
}
const pagination = new Pagination(
  document.getElementById('pagination'),
  options,
);
pagination.on('afterMove', function (evt) {
  const currentPage = evt.page;
  fetchMoviesFromLocalStorage(currentListFilms, currentPage);
});

function getDataFromLocalStorage(listName, page = 1) {
  const amountOfLoad = 9;
  const firstIndex = page * amountOfLoad - amountOfLoad;
  const lastIndex = page * amountOfLoad;
  const shortList = listName.slice(firstIndex, lastIndex);
  return shortList;
}
