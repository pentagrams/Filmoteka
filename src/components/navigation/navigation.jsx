import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './navigation.scss';

export default function Navigation() {
  return (
    <>
      <ul className="navigation">
        <li className="navigation__item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className="navigation__link"
            activeClassName="navigation__link--active"
            to={routes.library}
          >
            My library
          </NavLink>
        </li>
      </ul>
    </>
  );
}
