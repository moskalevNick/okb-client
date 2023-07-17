import styles from './GemsPage.module.css';

export const GemsPage = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promoDescr}>
        <span>ВЫРАЩИВАНИЕ ИСКУССТВЕННЫХ АЛМАЗОВ</span> <br />
        УСТАНОВКИ ДЛЯ ВЫРАЩИВАНИЯ АЛМАЗОВ
      </div>
      <div className={styles.promoRectangle}></div>
    </div>
  )
};
