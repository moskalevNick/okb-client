export type VacancyType = {
  id: string;
  position: string;
  department: string;
  description: string;
  descriptionItem: string[];
  contact: string;
  salary: string;
};

export interface VacancyState {
  vacancies: any[];
  loading: boolean;
  error: null | string;
}

export enum VacancyActionTypes {
  FETCH_VACANCY = 'FETCH_VACANCY',
  FETCH_VACANCY_SUCCESS = 'FETCH_VACANCY_SUCCESS',
  FETCH_VACANCY_ERROR = 'FETCH_VACANCY_ERROR',
}

interface FetchVacancyAction {
  type: VacancyActionTypes.FETCH_VACANCY;
}

interface FetchVacancySuccessAction {
  type: VacancyActionTypes.FETCH_VACANCY_SUCCESS;
  payload: any[];
}

interface FetchVacancyErrorAction {
  type: VacancyActionTypes.FETCH_VACANCY_ERROR;
  payload: string;
}

export type VacancyAction =
  | FetchVacancyAction
  | FetchVacancySuccessAction
  | FetchVacancyErrorAction;

// export interface Ivacancys {
//     id: number;
//     position: string;
//     department:  string;
//     description:  string;
//     descriptionItem: [];
//     contact:  string;
//     salary:  string;
// }
