import {
  VacancyAction,
  VacancyActionTypes,
  VacancyState,
} from '../../types/vacancy';

const initialState: VacancyState = {
  vacancies: [],
  loading: false,
  error: null,
};

export const vacanciesReduser = (
  state = initialState,
  action: VacancyAction
): VacancyState => {
  switch (action.type) {
    case VacancyActionTypes.FETCH_VACANCY:
      return { loading: true, error: null, vacancies: [] };
    case VacancyActionTypes.FETCH_VACANCY_SUCCESS:
      return { loading: false, error: null, vacancies: action.payload };
    case VacancyActionTypes.FETCH_VACANCY_ERROR:
      return { loading: false, error: action.payload, vacancies: [] };
    default:
      return state;
  }
};
