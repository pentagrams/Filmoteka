export const createInput = (className, type, name, placeholder) => {
  const input = document.createElement('input');

  input.className = `${className}__input`;

  input.type = type;
  input.name = name;
  if (placeholder) {
    input.placeholder = placeholder;
  }
  return input;
};
