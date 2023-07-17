import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';

import location from '../../resources/footer/location.svg'

export const Footer = () => {
    const activeStyle = {
        fontWeight: '400',
        // color: '#1487F2',
        color: 'rgba(75, 125, 62, 1)',
        // borderBottom: '3px solid #1487F2',
        transition: 'all .2s',
      };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperLocation}>
                <div>
                    <img src={location} alt="location" />
                </div>
                <div>
                г. Минск, ул. Ак. Красина, д. 99, корп. 82 <br />
                okb-acad@yandex.by <br />
                Режим работы: Пн-пт: 8.30-17.00 <br />
                Обед: 12.00-12.30
                </div>
            </div>
            <div className={styles.wrapperContacts}>
                Приёмная: <br />
                {/* тел./ф. +375-17-343-33-60, <br />
                тел. +375-17-358-18-31 <br /> */}
                <a href="tel:+375173433360" className={styles.wrapperPhone}>тел./ф. +375-17-343-33-60,</a><br />
                <a href="tel:+375173581831" className={styles.wrapperPhone}>тел. +375-17-358-18-31</a><br />
                <NavLink
                    to='/contacts'
                    end
                    className={styles.section}
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                    КОНТАКТЫ
                </NavLink>
            </div>
        </div>
    );
};

export default Footer;