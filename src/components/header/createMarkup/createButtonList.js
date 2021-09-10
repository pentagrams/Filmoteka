export const createButtonList = (arrayButtons, className) => {
  const buttons = document.createElement('ul');

  buttons.className = `${className}__list`;

  arrayButtons.forEach(({ id, text }) => {
    const button = document.createElement('li');
    const navLink = document.createElement('a');

    button.className = `${className}__item`;
    navLink.className = `${className}__link`;

    navLink.innerText = text;
    navLink.href = `#${id}`;

    button.append(navLink);
    buttons.append(button);
  });

  return buttons;
};
