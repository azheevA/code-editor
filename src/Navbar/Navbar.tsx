import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to="/"
                className={({ isActive }: Parameters<Exclude<NavLinkProps['className'], string | undefined>>[0]) =>
                    isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/code"
                className={({ isActive }: Parameters<Exclude<NavLinkProps['className'], string | undefined>>[0]) =>
                    isActive ? `${styles.btn} ${styles.active}` : styles.btn
                }
            >
                Code
            </NavLink>
        </nav>
    );
};

export default Navbar;
