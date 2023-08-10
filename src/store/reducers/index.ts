import { combineReducers } from 'redux';
import { vacanciesReduser } from './vacanciesReduser';
import { productsReduser } from './productsRedusers';
import { partnerReduser } from './partnerRedusers';
// import { todoReduser } from "./todoReduser";

export const rootReducer = combineReducers({
  vacancies: vacanciesReduser,
  products: productsReduser,
  partners: partnerReduser,
});
export type RootState = ReturnType<typeof rootReducer>;
