import { useState } from 'react';
import PropTypes from 'prop-types';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
import './search.scss';

export default function Search({ onChangeQuary }) {
  const [quary, setQuary] = useState('');

  const handleChange = evt => {
    setQuary(evt.target.value);
    onChangeQuary(quary);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          className="header-form__input"
          onChange={handleChange}
          value={quary}
          type="text"
          placeholder="Поиск фильмов"
        />
        <SvgGenerator id="search" className="header-form__icon" />
      </form>
    </div>
  );
}

Search.propTypes = {
  onChangeQuary: PropTypes.func,
};
