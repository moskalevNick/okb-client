import React from 'react';
import styles from './LoaderPartner.module.css';

export const LoaderPartner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.loader} />
        <p className={styles.text}>Загрузка</p>
      </div>
    </div>
  );
};
