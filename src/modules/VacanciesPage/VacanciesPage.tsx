import styles from './VacanciesPage.module.css';

export const VacanciesPage = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promoDescr}>
        <span>НАШИ ВАКАНСИИ</span> <br />
        ОТКРЫТЫЕ ПОЗИЦИИ ДЛЯ КАНДИДАТОВ
      </div>
      <div className={styles.promoRectangle}></div>
    </div>
  )
};
