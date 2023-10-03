import { saveToLocalStorage } from './localStorageHelpers';  // імпортуйте функцію

const localStorageMiddleware = store => next => action => {
  const result = next(action);  // пересилання дії до наступного middleware або ред'юсера

  // Після обробки дії ред'юсерами, зберігайте поточний стан корзини
  const currentCartState = store.getState().cart;
  saveToLocalStorage(currentCartState);

  return result;
}

export default localStorageMiddleware;
