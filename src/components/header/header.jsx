import { Route, Switch } from 'react-router';
import { routes } from '../../routes';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import Search from '../search/search';
import LibraryNavigation from '../libraryNavigation/libraryNavigation';
import './header.scss';

export default function Header({ onChangeQuary }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Logo />
          <Navigation />
        </nav>

        <Switch>
          <Route
            exact
            path={routes.home}
            render={props => (
              <Search {...props} onChangeQuary={onChangeQuary} />
            )}
          />
          <Route exact path={routes.library} component={LibraryNavigation} />
        </Switch>
      </div>
    </header>
  );
}

Header.propTypes = {
  onChangeQuary: PropTypes.func,
};
