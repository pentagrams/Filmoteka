import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './views/Home/Home';
import LibraryPage from './views/Library/Library';
import { PageIds } from './templates/constants';

class App {
  static container = document.body;
  static defaultPageId = 'current-page';
  initialPage = null;

  static renderNewPage(idPage) {
    let page = null;
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);

    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    if (idPage === PageIds.home) {
      page = new HomePage(idPage);
    } else if (idPage === PageIds.lib) {
      page = new LibraryPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  Router() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new HomePage('home-page');
    this.header = new Header('header', 'header');
    this.footer = new Footer('footer', 'footer');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('home-page');
    this.Router();
  }
}

export default App;
