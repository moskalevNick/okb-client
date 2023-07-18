import styles from './ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <>
      <div className={styles.promo}>
        <div className={styles.promoDescr}>КАК С НАМИ СВЯЗАТЬСЯ</div>
        <div className={styles.promoRectangle}></div>
      </div>
      <div className={styles.promoContacts}>
        <div className={styles.promoTitle}>КОНТАКТЫ</div>
        <div className={styles.promoWrapper}>
          <div className={styles.promoPositions}>
            <span>Директор:</span>
            <br />
            Лихтарович Дмитрий Александрович
            <br />
            <br />
            <span>Заместитель директора</span>
            <br />
            Шкурко Валерий Мефодьевич
            <br />
            <br />
            <span>Приёмная: </span>
            <a href='tel:+375173433360' className={styles.wrapperPhone}>
              тел./ф. +375-17-343-33-60,
            </a>
            <br />
            <a href='tel:+375173581831' className={styles.wrapperPhone}>
              тел. +375-17-358-18-31
            </a>
            <br />
            <br />
            <i>Главный инженер:</i>
            <br />
            Дашко Александр Александрович
            <br />
            <a href='tel:+375173759366' className={styles.wrapperPhone}>
              тел. +375-17-375-93-66
            </a>
            <br />
            <br />
            <span>Отдел материально-технического снабжения и кооперации:</span>
            <br />
            <i>Начальник отдела:</i>
            <br />
            Бегун Александр Дмитриевич
            <br />
            <a href='tel:+375173741836' className={styles.wrapperPhone}>
              тел. +375-17-374-18-36
            </a>
            <br />
          </div>
          <div className={styles.promoPositions}>
            <span>Отдел перспективных изделий и разработок:</span>
            <br />
            <i>Начальник отдела:</i>
            <br />
            Павлюкович Петр Александрович
            <br />
            <a href='tel:+375173572369' className={styles.wrapperPhone}>
              тел. +375-17-357-23-69
            </a>
            <br />
            <br />
            <span>Отдел бухгалтерского учёта и отчётности:</span>
            <br />
            <a href='tel:+375173779374' className={styles.wrapperPhone}>
              тел. +375-17-377-93-74
            </a>
            <br />
            <br />
            <span>Отдел технического контроля:</span>
            <br />
            <i>И.о Начальник отдела:</i> <br />
            Андреева Татьяна Анатольевна
            <br />
            <a href='tel:+375173748826' className={styles.wrapperPhone}>
              т. +375-17-374-88-26
            </a>
            <br />
            <br />
            <span>Планово-экономический отдел:</span>
            <br />
            <i>Начальник отдела:</i> <br />
            Арбузов Ярослав Владимирович
            <br />
            <a href='tel:+375173641364' className={styles.wrapperPhone}>
              т. +375-17-364-13-64
            </a>
            <br />
            <br />
            Адрес:г. Минск, ул. Ак. Красина, д. 99, корп. 82
          </div>
        </div>
        <div className={styles.promoEmail}>
          E-mail:<a href='mailto:okb-acad@yandex.by'> okb-acad@yandex.by</a>
        </div>
      </div>
    </>
  );
};
