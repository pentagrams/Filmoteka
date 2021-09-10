export const createLogo = (className, logoName, href) => {
  const logo = document.createElement('a');
  const svg = document.createElement('svg');
  const use = document.createElement('use');

  logo.className = `${className}__logo`;
  svg.className = `${className}__logo-icon`;

  use.setAttribute('href', href);

  svg.append(use);
  logo.append(svg);

  if (logoName) {
    const logoText = document.createElement('p');
    logoText.className = `${className}__logo-text`;
    logoText.innerText = logoName;
    logo.append(logoText);
  }

  return logo;
};
