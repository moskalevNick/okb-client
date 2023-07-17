import { NavLink } from 'react-router-dom';
import logonan from '../../resources/logo/logonan.svg'
import logofull from '../../resources/logo/logofull.svg'
import OKB from '../../resources/logo/OKB.svg'
import peleng from '../../resources/subHeader/peleng.svg'
import natrix from '../../resources/subHeader/Natrix.svg'
import et from '../../resources/subHeader/et.svg'
import naftuk from '../../resources/subHeader/naftuk.svg'
import mnpz from '../../resources/subHeader/mnpz.svg'
import belaES from '../../resources/subHeader/BelaES.svg'
import belarusianneft from '../../resources/subHeader/Belarusianneft.svg'
import integral from '../../resources/subHeader/integral.svg'
import mogilevkhimvolokno from '../../resources/subHeader/mogilevkhimvolokno.svg'

import styles from './Header.module.css';

export const Header = () => {
  const activeStyle = {
    fontWeight: '400',
    color: '#1487F2',
    transition: 'all .2s',
  };

  return (
      <div className={styles.wrapper}>
        <NavLink 
          to='/'
          end
          className={styles.wrapperLogo}
        >
          <img src={logonan} alt="logonan" />
          <div className={styles.wrapperFull}>
            <img src={logofull} alt="logofull"/>
            <div className={styles.wrapperOKB}>
              <img src={OKB} alt="OKB" />
              <span>Академическое</span>
            </div>
          </div>
        </NavLink>
        <div className={styles.wrapperSection}>
          <NavLink
            to='/portfolio'
            end
            className={styles.section}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ПОРТФОЛИО
          </NavLink>
          <NavLink
            to='/laboratory'
            className={styles.section}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ЛАБОРАТОРИЯ
          </NavLink>
          <NavLink
            to='/gems'
            className={styles.section}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            АЛМАЗЫ
          </NavLink>
          <NavLink
            to='/vacancies'
            className={styles.section}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ВАКАНСИИ
          </NavLink>
          <NavLink
            to='/contacts'
            className={styles.section}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            КОНТАКТЫ
          </NavLink>
        </div>
        <div className={styles.subHeader}>
          <div className={styles.wrapperFirstHalf}>
            <img src={peleng} alt="peleng" />
            <img src={natrix} alt="natrix" />
            <img src={et} alt="et" />
            <img src={naftuk} alt="naftuk" />
            <img src={mnpz} alt="mnpz" />
            <img src={belaES} alt="belaES" />
            <img src={belarusianneft} alt="belarusianneft" />
            <img src={integral} alt="integral" />
            <img src={mogilevkhimvolokno} alt="mogilevkhimvolokno" />
          </div>
          <div className={styles.wrapperSecondHalf}>
            <img src={peleng} alt="peleng" />
            <img src={natrix} alt="natrix" />
            <img src={et} alt="et" />
            <img src={naftuk} alt="naftuk" />
            <img src={mnpz} alt="mnpz" />
            <img src={belaES} alt="belaES" />
            <img src={belarusianneft} alt="belarusianneft" />
            <img src={integral} alt="integral" />
            <img src={mogilevkhimvolokno} alt="mogilevkhimvolokno" />
          </div>
        </div>
    </div>
  );
};
