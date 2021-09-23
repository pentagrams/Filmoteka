import Button from '../button/button';
import './libraryNavigation.scss';

export default function LibraryNavigation() {
  return (
    <ul className="library-navigation">
      <li className="library-navigation__item">
        <Button text="Watched" />
      </li>
      <li className="library-navigation__item">
        <Button text="queue" />
      </li>
    </ul>
  );
}
