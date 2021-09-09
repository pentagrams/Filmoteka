import Component from '../../templates/Component';
import Container from '../container/Container';
import { createLogo, createNavigation } from './createMarkup';

class Header extends Component {
  containerHTML = null;
  constructor(tagName, className) {
    super(tagName, className);
    this.containerHTML = new Container('div', 'container').render();
  }

  createMarkup() {
    const logoHTML = createLogo();
    const navigationHTML = createNavigation(logoHTML);
    this.containerHTML.append(navigationHTML);
    this.container.append(this.containerHTML);
  }

  render() {
    this.createMarkup();
    return this.container;
  }
}

export default Header;
