import * as React from 'react';
import ALink from '../a-link';
import * as styles from './primary-nav.module.css';

interface PrimaryNavProps {
  className?: string;
  noHome?: boolean;
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ className, children, noHome }) => {
  const wrapperClasses = className ? `${className} ${styles.wrapper}` : styles.wrapper;

  return (
    <nav className={wrapperClasses}>
      <ul className={styles.list}>
        {!noHome && (
          <li className={styles.item}>
            <ALink to="/" className={styles.link}>Home</ALink>
          </li>
        )}
        <li className={styles.item}>
          <ALink to="/about" className={styles.link}>About</ALink>
        </li>
        <li className={styles.item}>
          <ALink to="/contact" className={styles.link}>Contact</ALink>
        </li>
        {children}
      </ul>
    </nav>
  );
}

export default PrimaryNav;
