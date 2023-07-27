import React, {FC} from 'react';
import {useEffect} from 'react'
import styles from './VacanciesItem.module.css';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const VacanciesItem: FC = () => {

  const {vacancy, error,loading} = useTypedSelector(state => state.vacancy)

  const {fetchVacancy} = useActions()

  useEffect(() => {
    fetchVacancy()
  }, [])

  if (loading) {
    return <h1>Идет загрузка</h1>
  }

  if(error) {
      return <h1>{error}</h1>
  }

    return (
      <>
        {vacancy.map((vacancy) =>
          <div key={vacancy.id} className={styles.vacanciesItem}>
            <div className={styles.vacanciesPosition}>{vacancy.position}</div>
            <div className={styles.vacanciesDepartment}>{vacancy.department}</div>
            <ul className={styles.vacanciesDescription}>{vacancy.description}
              {vacancy.descriptionItem ? vacancy.descriptionItem.map((item: any[]) =>
                <li>{item}</li>
              ) : <h1>Идет загрузка</h1>}
            </ul>
            <div className={styles.vacanciesWrap}>
              <div className={styles.vacanciesContact}>
                <span>Кадровый отдел:</span><br />
                {vacancy.contact}
              </div>
              <div className={styles.vacanciesSalary}>
                {vacancy.salary}
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default VacanciesItem;