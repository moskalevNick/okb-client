import React from 'react';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.loader} />
        <p className={styles.text}>Загрузка</p>
      </div>
    </div>
  );
};
