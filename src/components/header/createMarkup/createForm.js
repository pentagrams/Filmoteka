export const createForm = (input, className, id) => {
  const form = document.createElement('form');

  form.className = className;
  form.id = id;

  form.append(input);

  return form;
};
