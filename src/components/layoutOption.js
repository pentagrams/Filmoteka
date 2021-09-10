import { PageIds } from '../templates/constants';
const Buttons = [
  {
    id: PageIds.home,
    text: 'Home',
  },
  {
    id: PageIds.lib,
    text: 'My library',
  },
];

const libButtons = [
  {
    id: `${PageIds.lib}/watched`,
    text: 'Watched',
  },
  {
    id: `${PageIds.lib}/queue`,
    text: 'queue',
  },
];

const option = {
  logo: {
    className: 'navigation',
    logoText: 'Filmoteka',
    href: './image/sprite.svg#icon-film',
  },
  navigation: {
    className: 'navigation',
    array: Buttons,
  },
  input: {
    className: 'form',
    type: 'text',
    name: 'query',
    placeholder: 'Поиск фильмов',
  },
  form: {
    className: 'form',
    id: 'search-form',
    href: './image/sprite.svg#icon-search',
  },
  libraryButtons: {
    array: libButtons,
    className: 'library-nav',
  },
};

export default option;
