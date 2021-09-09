import Component from '../../templates/Component';
import Container from '../container/Container';
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
  constructor(tagName, className) {
    super(tagName, className);
  }

  createMarkup() {
    const containerHTML = new Container('div', 'container');
    const navHTML = document.createElement('nav');
    navHTML.className = 'navigation';

    const logoHTML = document.createElement('a');
    logoHTML.className = 'navigation__logo';

    const pageButtons = document.createElement('ul');
    Buttons.forEach(({ id, text }) => {
      const buttonHTML = document.createElement('li');
      const navLinkHTML = document.createElement('a');

      navLinkHTML.innerText = text;
      navLinkHTML.href = `#${id}`;
      navLinkHTML.className = 'navigation__link';
      buttonHTML.className = 'navigation__item';

      buttonHTML.append(navLinkHTML);
      pageButtons.append(buttonHTML);
    });
    navHTML.append(logoHTML);
    navHTML.append(pageButtons);
    containerHTML.append(navHTML);

    this.container.append(containerHTML.render());
  }

  render() {
    this.createMarkup();
    return this.container;
  }
}

export default Header;
