import { NavLink, useLocation } from 'react-router-dom';
import logonan from '../../resources/logo/logonan.svg';
import logofull from '../../resources/logo/logofull.svg';

import PartnerItem from './PartnreItem/PartnerItem';

import styles from './Header.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { partnerType } from '../../types/partner';
import { LoaderPartner } from '../LoaderPartner/LoaderPartner';

export const Header = () => {

  const {partner, error, loading} = useTypedSelector(state => state.partners)

  const {fetchPartner} = useActions()

  const { pathname } = useLocation();

  const [activeLink, setActiveLink] = useState(0);
  const [isReverse, setIsRevers] = useState(true);

  useEffect(() => {
      fetchPartner()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let mainPath = pathname.substring(1);

    if (mainPath.indexOf('/')) {
      mainPath = mainPath.split('/')[0];
    }

    if (mainPath)
      switch (mainPath) {
        case 'portfolio':
          setActiveLink(1);
          break;
        case 'laboratory':
          setActiveLink(2);
          break;
        // case 'gems':
        //   setActiveLink(3);
        //   break;
        case 'vacancies':
          setActiveLink(3);
          break;
        case 'contacts':
          setActiveLink(4);
          break;
        default:
          break;
      }
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLogo}>
        <NavLink
          to='https://nasb.gov.by/rus/about/glavnaya/'
          end
        >
          <img src={logonan} alt='logonan' />
        </NavLink>
        <NavLink
          to='/'
          end
          onClick={() => {
            setActiveLink(0);
          }}
        >
          <img src={logofull} alt='logofull' />
        </NavLink>
      </div>
      <div className={styles.wrapperSection}>
        <NavLink
          to='/portfolio'
          end
          className={classNames(
            styles.section,
            activeLink === 1 && styles.activeSection,
            isReverse && activeLink === 1 && styles.reverseAnimation
          )}
          onClick={() => {
            setActiveLink(1);
            !isReverse && setIsRevers(true);
          }}
        >
          ПОРТФОЛИО
        </NavLink>
        <NavLink
          to='/laboratory'
          className={classNames(
            styles.section,
            activeLink === 2 && styles.activeSection,
            isReverse && activeLink === 2 && styles.reverseAnimation
          )}
          onClick={() => {
            if (activeLink > 2) {
              setIsRevers(true);
            } else setIsRevers(false);
            setActiveLink(2);
          }}
        >
          ЛАБОРАТОРИЯ
        </NavLink>
        {/* <NavLink
          to='/gems'
          className={classNames(
            styles.section,
            activeLink === 3 && styles.activeSection,
            isReverse && activeLink === 3 && styles.reverseAnimation
          )}
          onClick={() => {
            if (activeLink > 3) {
              setIsRevers(true);
            } else setIsRevers(false);
            setActiveLink(3);
          }}
        >
          АЛМАЗЫ
        </NavLink> */}
        <NavLink
          to='/vacancies'
          className={classNames(
            styles.section,
            activeLink === 3 && styles.activeSection,
            isReverse && activeLink === 3 && styles.reverseAnimation
          )}
          onClick={() => {
            if (activeLink > 3) {
              setIsRevers(true);
            } else setIsRevers(false);
            setActiveLink(3);
          }}
        >
          ВАКАНСИИ
        </NavLink>
        <NavLink
          to='/contacts'
          className={classNames(
            styles.section,
            activeLink === 4 && styles.activeSection,
            isReverse && activeLink === 4 && styles.reverseAnimation
          )}
          onClick={() => {
            if (activeLink > 4) {
              setIsRevers(true);
            } else setIsRevers(false);
            setActiveLink(4);
          }}
        >
          КОНТАКТЫ
        </NavLink>
      </div>
      <div className={styles.subHeader}>
        {loading && <LoaderPartner />}
        {error && <h1>{error}</h1>}
        <div className={styles.wrapperFirstHalf}>
          {partner.map((partner: partnerType) => 
            <PartnerItem partner={partner} key={partner.id}/>
          )}
          
        </div>
        <div className={styles.wrapperSecondHalf}>
          {partner.map((partner: partnerType) => 
            <PartnerItem partner={partner} key={partner.id}/>
          )}
        </div>
      </div>
    </div>
  );
};
