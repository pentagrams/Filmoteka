export const createLogo = (className, logoName) => {
  const logo = document.createElement('a');
  const logoText = document.createElement('p');

  logo.className = `${className}__logo`;
  logoText.className = `${className}__logo-text`;
  logoText.innerText = logoName;

  logo.append(logoText);

  return logo;
};
