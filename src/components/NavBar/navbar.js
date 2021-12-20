import React from 'react';
import styles from './NavBar.module.css';
// import logo from '../../pub icons/google.svg';

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.upperNav}>
        {/* <img src={logo} className={styles.logo} alt="logo" /> */}
        <p>
          <b>Nomad</b>
        </p>
      </div>
    </div>
  );
};
