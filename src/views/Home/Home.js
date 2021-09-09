import Page from '../../templates/Page';

class HomePage extends Page {
  constructor(id) {
    super(id);
  }

  render() {
    return this.container;
  }
}

export default HomePage;
