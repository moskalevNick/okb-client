import styles from './VacanciesPage.module.css';
import VacanciesItem from './VacanciesItem/VacanciesItem';

export const VacanciesPage = () => {

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
        <VacanciesItem/>
      </div>
    </>
    
  )
};
