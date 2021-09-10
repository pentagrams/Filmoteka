import { createLogo } from './createLogo';
import { createButtonList } from './createButtonList';
import { createForm } from './createForm';
import { createInput } from './createInput';
import options from '../../layoutOption';

export const getNavigation = () => {
  const { logo, navigation } = options;
  const nav = document.createElement('nav');
  const navlogo = createLogo(logo.className, logo.logoText);
  const navButtons = createButtonList(navigation.array, navigation.className);

  nav.className = navigation.className;
  nav.append(navlogo);
  nav.append(navButtons);
  return nav;
};

export const getForm = () => {
  const { input, form } = options;
  const inputHTML = createInput(input.className, input.type, input.name, input.placeholder);
  const formHTML = createForm(inputHTML, form.className, form.id);
  return formHTML;
};

export const getLibraryButtons = () => {
  const { libraryButtons } = options;
  const buttons = createButtonList(libraryButtons.array, libraryButtons.className);
  return buttons;
};
