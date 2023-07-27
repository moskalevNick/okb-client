import styles from './VacancyPage.module.css';
import VacancyItem from './VacancyItem/VacancyItem';
import React from 'react';
import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { VacancyType } from '../../types/vacancy';

export const VacanciesPage = () => {
  const { vacancies, error, loading } = useTypedSelector(
    (state) => state.vacancies
  );

  const { fetchVacancy } = useActions();

  useEffect(() => {
    fetchVacancy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
        {vacancies.map((vacancy: VacancyType) => (
          <VacancyItem vacancy={vacancy} key={vacancy.id} />
        ))}
      </div>
    </>
  );
};
