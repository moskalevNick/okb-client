import { Dispatch } from "redux"
import axios from "axios"
import { VacancyAction, VacancyActionTypes } from "../../types/vacancy"

export const fetchVacancy = () => {
    return async (dispatch: Dispatch<VacancyAction>) => {
        try {
            dispatch({type: VacancyActionTypes.FETCH_VACANCY})
            const response = await axios.get('https://okb-server.vercel.app/vacancy') // сделать .env API_URL
            dispatch({type: VacancyActionTypes.FETCH_VACANCY_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: VacancyActionTypes.FETCH_VACANCY_ERROR, payload: 'Произошла ошибка при загрузке вакансий'})
        }
    }
}