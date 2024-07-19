import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}> Vivo Pushando 
        </Link>
        <div className={styles.navLinks}>
          <Link href="/basic"className={styles.navLink}> Basic </Link>
          <Link href="/mid" className={styles.navLink}>Mid </Link>
          <Link href="/hard" className={styles.navLink}>Hard </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;