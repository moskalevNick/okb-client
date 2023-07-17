import styles from './PortfolioPage.module.css';

export const PortfolioPage = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promoDescr}>
        <span>НАШИ ЗАКАЗЫ</span> <br />
        ЗАКАЗ ДЛЯ ЗАКАЗЧИКА “ЗАКАЗЧИК”
      </div>
      <div className={styles.promoRectangle}></div>
    </div>
  )
};
