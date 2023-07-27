import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as VacancyActionCreators from '../store/action-creators/vacancy'
import ActionCreators from '../store/action-creators/index';

export const useActions = () => {
  const dispatch = useDispatch();
  // return bindActionCreators(VacancyActionCreators, dispatch)
  return bindActionCreators(ActionCreators, dispatch);
};
