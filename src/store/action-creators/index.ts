import * as VacancyActionCreators from './vacancy';
import * as ProductActionCreators from './product';

const creators = {
  ...VacancyActionCreators,
  ...ProductActionCreators,
};

export default creators;
