import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import NotFound from './pages/NotFound/NotFound';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path={routes.home} component={HomePage}></Route>
        <Route exact path={routes.library} component={LibraryPage}></Route>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
