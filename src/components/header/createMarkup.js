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

export const createLogo = () => {
  const logoHTML = document.createElement('a');
  logoHTML.className = 'navigation__logo';

  const svgTag = document.createElement('svg');
  svgTag.className = 'Logo__icon';

  const useTag = document.createElement('use');
  svgTag.append(useTag);

  const logoText = document.createElement('p');
  logoText.innerText = 'Filmoteka';
  logoText.className = 'Logo__text';

  logoHTML.append(svgTag);
  logoHTML.append(logoText);

  return logoHTML;
};

export const createNavigation = navLogo => {
  const navHTML = document.createElement('nav');
  navHTML.className = 'navigation';

  const navButtons = document.createElement('ul');
  navButtons.className = 'navigation__list';

  Buttons.forEach(({ id, text }) => {
    const buttonHTML = document.createElement('li');
    buttonHTML.className = 'navigation__item';

    const navLinkHTML = document.createElement('a');
    navLinkHTML.innerText = text;
    navLinkHTML.href = `#${id}`;
    navLinkHTML.className = 'navigation__link';

    buttonHTML.append(navLinkHTML);
    navButtons.append(buttonHTML);
  });

  if (navLogo) {
    navHTML.append(navLogo);
  }
  navHTML.append(navButtons);

  return navHTML;
};
