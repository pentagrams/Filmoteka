import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import Media from 'react-media';
import SvgGenerator from '../SvgGenerator/SvgGenerator';
import './logo.scss';

export default function Logo() {
  return (
    <>
      <NavLink to={routes.home}>
        <div className="logo">
          <SvgGenerator className="logo__icon" id="logo" />
          <Media
            queries={{
              small: '(min-width: 768px)',
            }}
          >
            {matches => (
              <>{matches.small && <p className="logo__text">Filmoteka</p>}</>
            )}
          </Media>
        </div>
      </NavLink>
    </>
  );
}
