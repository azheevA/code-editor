import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                className={({ isActive }: Parameters<NavLinkProps['className']>[0]) =>
                    isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }: Parameters<NavLinkProps['className']>[0]) =>
                    isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
                to="/json"
            >
                Code
            </NavLink>
        </nav>
    );
};

export default Navbar;
