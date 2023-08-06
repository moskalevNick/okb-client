import styles from './VacancyPage.module.css';
import VacancyItem from './VacancyItem/VacancyItem';
import React from 'react';
import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { VacancyType } from '../../types/vacancy';
import { Loader } from '../../components/Loader/Loader';

export const VacanciesPage = () => {
  const { vacancies, error, loading } = useTypedSelector(
    (state) => state.vacancies
  );

  const { fetchVacancy } = useActions();

  useEffect(() => {
    fetchVacancy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.promo}>
        <div className={styles.promoDescr}>
          <span>НАШИ ВАКАНСИИ</span> <br />
          ОТКРЫТЫЕ ПОЗИЦИИ ДЛЯ КАНДИДАТОВ
        </div>
        <div className={styles.promoRectangle}></div>
      </div>
      <div className={styles.vacancies}>
        {/* {loading && <h1>Идет загрузка</h1>} */}
        {loading && <Loader/>}
        {error && <h1>{error}</h1>}
        {vacancies.map((vacancy: VacancyType) => (
          <VacancyItem vacancy={vacancy} key={vacancy.id} />
        ))}
      </div>
    </>
  );
};
