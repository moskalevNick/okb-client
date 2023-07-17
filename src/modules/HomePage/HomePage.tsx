import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promoDescr}>
        <span>ЕМКОСТНОЕ ОБОРУДОВАНИЕ ВЫСОКОГО ДАВЛЕНИЯ </span> <br />
        ПРИНЦИПЫ ПРОЕКТИРОВАНИЯ И ПРОИЗВОДСТВЕННОГО ПРОЦЕССА
      </div>
      <div className={styles.promoRectangle}></div>
    </div>
  )
};
