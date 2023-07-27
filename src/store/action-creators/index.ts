import * as VacancyActionCreators from './vacancy'
import * as ProductActionCreators from './product'

export default {
    ...VacancyActionCreators,
    ...ProductActionCreators
}