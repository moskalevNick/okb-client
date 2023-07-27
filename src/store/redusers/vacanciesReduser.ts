import { VacancyAction, VacancyActionTypes, VacancyState } from "../../types/vacancy"

const initialState: VacancyState = {
    vacancy: [],
    loading: false,
    error: null
}

export const vacanciesReduser = (state = initialState, action: VacancyAction): VacancyState => {
    switch (action.type) {
        case VacancyActionTypes.FETCH_VACANCY:
            return {loading: true, error: null, vacancy: []}
        case VacancyActionTypes.FETCH_VACANCY_SUCCESS:
            return {loading: false, error: null, vacancy: action.payload}
        case VacancyActionTypes.FETCH_VACANCY_ERROR:
            return {loading: false, error: action.payload, vacancy: []}
        default: 
            return state
    }
}