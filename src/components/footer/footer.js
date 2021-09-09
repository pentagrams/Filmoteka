import Component from '../../templates/Component';

class Footer extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  render() {
    return this.container.append(footerTemplate);
  }
}

export default Footer;
