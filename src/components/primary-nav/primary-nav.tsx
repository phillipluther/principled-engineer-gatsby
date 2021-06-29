import * as React from 'react';
import Link from '../link';
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
            <Link to="/" className={styles.link}>
              Blog Posts
            </Link>
          </li>
        )}
        <li className={styles.item}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
        {children}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
