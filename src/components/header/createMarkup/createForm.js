export const createForm = (input, className, id, href) => {
  const form = document.createElement('form');
  const svg = document.createElement('svg');
  const use = document.createElement('use');

  form.className = className;
  form.id = id;
  svg.className = `${className}__icon`;
  use.setAttribute('href', href);

  form.append(input);
  form.append(svg);
  svg.append(use);
  return form;
};
