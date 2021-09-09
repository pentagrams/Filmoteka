export const createLogo = (className, logoName) => {
  const logoHTML = document.createElement('a');
  const svgTag = document.createElement('svg');
  const useTag = document.createElement('use');

  logoHTML.className = `${className}__logo`;
  svgTag.className = `${className}__logo-icon`;

  svgTag.append(useTag);
  logoHTML.append(svgTag);

  if (logoName) {
    const logoText = document.createElement('p');
    logoText.className = `${className}__logo-text`;
    logoText.innerText = logoName;
    logoHTML.append(logoText);
  }

  return logoHTML;
};

export const createButtonList = (arrayButtons, className) => {
  const navButtons = document.createElement('ul');

  navButtons.className = `${className}__list`;

  arrayButtons.forEach(({ id, text }) => {
    const buttonHTML = document.createElement('li');
    const navLinkHTML = document.createElement('a');

    buttonHTML.className = `${className}__item`;
    navLinkHTML.className = `${className}__link`;

    navLinkHTML.innerText = text;
    navLinkHTML.href = `#${id}`;

    buttonHTML.append(navLinkHTML);
    navButtons.append(buttonHTML);
  });

  return navButtons;
};
