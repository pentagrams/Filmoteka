import Component from '../../templates/Component';

class Container extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  render() {
    return this.container;
  }
}

export default Container;
