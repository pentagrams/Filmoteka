import Component from '../../templates/Component';
import Container from '../container/Container';
import { createLogo, createButtonList } from './createMarkup';
import { PageIds } from '../../templates/constants';

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

class Header extends Component {
  containerHTML = null;
  constructor(tagName, className) {
    super(tagName, className);
    this.containerHTML = new Container('div', 'container').render();
  }

  createMarkup() {
    const navigationHTML = document.createElement('nav');
    const logoHTML = createLogo('navigation', 'Filmoteka');
    const navHTML = createButtonList(Buttons, 'navigation');
    navigationHTML.className = 'navigation';
    navigationHTML.append(logoHTML);
    navigationHTML.append(navHTML);
    this.containerHTML.append(navigationHTML);
    this.container.append(this.containerHTML);
  }

  render() {
    this.createMarkup();
    return this.container;
  }
}

export default Header;
