import * as VacancyActionCreators from './vacancy';
import * as ProductActionCreators from './product';
import * as PartnerActionCreators from './partner';

const creators = {
  ...VacancyActionCreators,
  ...ProductActionCreators,
  ...PartnerActionCreators,
};

export default creators;
