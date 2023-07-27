import React, { FC } from 'react';
import styles from './VacancyItem.module.css';
import { VacancyType } from '../../../types/vacancy';

type VacancyItemType = {
  vacancy: VacancyType;
};

const VacancyItem: React.FC<VacancyItemType> = ({ vacancy }) => {
  return (
    <div key={vacancy.id} className={styles.vacanciesItem}>
      <div className={styles.vacanciesPosition}>{vacancy.position}</div>
      <div className={styles.vacanciesDepartment}>{vacancy.department}</div>
      <ul className={styles.vacanciesDescription}>
        {vacancy.description}
        {vacancy.descriptionItem ? (
          vacancy.descriptionItem.map((item) => <li key={item}>{item}</li>)
        ) : (
          <h1>Идет загрузка</h1>
        )}
      </ul>
      <div className={styles.vacanciesWrap}>
        <div className={styles.vacanciesContact}>
          <span>Кадровый отдел:</span>
          <br />
          {vacancy.contact}
        </div>
        <div className={styles.vacanciesSalary}>{vacancy.salary}</div>
      </div>
    </div>
  );
};

export default VacancyItem;
