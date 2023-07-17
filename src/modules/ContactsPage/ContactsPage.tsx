import styles from './ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <>
    <div className={styles.promo}>
      <div className={styles.promoDescr}>
        КАК С НАМИ СВЯЗАТЬСЯ
      </div>
      <div className={styles.promoRectangle}></div>
    </div>
    <div className={styles.promoContacts}>
      <div className={styles.promoTitle}>КОНТАКТЫ</div>
      <div className={styles.promoWrapper}>
        <div className={styles.promoPositions}>
          <span>Директор:</span><br />
          Лихтарович Дмитрий Александрович<br />
          <br />
          <span>Заместитель директора</span><br />
          Шкурко Валерий Мефодьевич<br />
          <br />
          <span>Приёмная:</span><br />
          тел./ф. +375-17-343-33-60,<br />
          тел. +375-17-358-18-31<br />
          <br />
          <i>Главный инженер:</i><br />
          Дашко Александр Александрович<br />
          тел. +375-17-375-93-66<br />
          <br />
          <span>Отдел материально-технического снабжения и кооперации:</span><br />
          <i>Начальник отдела:</i><br />
          Бегун Александр Дмитриевич<br />
          тел. +375-17-374-18-36<br />
        </div>
        <div className={styles.promoPositions}>
          <span>Отдел перспективных изделий и разработок:</span><br />
          <i>Начальник отдела:</i><br />
          Павлюкович Петр Александрович<br />
          тел. +375-17-357-23-69<br />
          <br />
          <span>Отдел бухгалтерского учёта и отчётности:</span><br />
          тел. +375-17-377-93-74<br />
          <br />
          <span>Отдел технического контроля:</span><br />
          <i>И.о Начальник отдела:</i> <br />
          Андреева Татьяна Анатольевна<br />
          т. +375-17-374-88-26<br />
          <br />
          <span>Планово-экономический отдел:</span><br />
          <i>Начальник отдела:</i> <br />
          Арбузов Ярослав Владимирович<br />
          т. +375-17-364-13-64<br />
          <br />
          Адрес:г. Минск, ул. А.К. Красина, д. 99, корп. 82
        </div>
      </div>
      <div className={styles.promoEmail}>E-mail:<a href='#'> okb-acad@yandex.by</a></div>
  </div>
    </>
  )
};
