import { combineReducers } from 'redux';
import { vacanciesReduser } from './vacanciesReduser';
import { productsReduser } from './productsRedusers';
// import { todoReduser } from "./todoReduser";

export const rootReducer = combineReducers({
  vacancies: vacanciesReduser,
  products: productsReduser,
});
export type RootState = ReturnType<typeof rootReducer>;
