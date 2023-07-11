import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
  const activeStyle = {
    fontWeight: '700',
    color: '#1487F2',
    borderBottom: '3px solid #1487F2',
    transition: 'all .2s',
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSection}>
        <NavLink
          to='/'
          end
          className={styles.section}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          logo
        </NavLink>
        <NavLink
          to='/contacts'
          className={styles.section}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          contacts
        </NavLink>
      </div>
    </div>
  );
};
