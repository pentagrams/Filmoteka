import Component from '../../templates/Component';
import Container from '../container/Container';
import refs from '../../templates/refs';
import { PageIds } from '../../templates/constants';
import { getNavigation, getForm, getLibraryButtons } from './createMarkup/getMarcup';

class Header extends Component {
  wrapper = null;
  constructor(tagName, className) {
    super(tagName, className);
    this.wrapper = new Container('div', 'container').render();
  }

  static switchHeaderContent(hash) {
    const form = getForm();
    const buttons = getLibraryButtons();
    if (hash === PageIds.home) {
      this.wrapper.append(form);
      refs.libraryButtons.remove();
    } else if (hash === PageIds.lib) {
      this.wrapper.append(buttons);
      refs.form.remove();
    }
  }

  Router = () => {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      Header.switchHeaderContent(hash);
    });
  };

  createMarkup() {
    const navigation = getNavigation();
    const defaultRederForm = getForm();
    this.wrapper.append(navigation);
    this.wrapper.append(defaultRederForm);
    this.container.append(this.wrapper);
  }

  render() {
    this.createMarkup();
    this.Router();

    return this.container;
  }
}

export default Header;
