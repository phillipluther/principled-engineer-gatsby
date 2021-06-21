import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './primary-nav.module.css';

interface PrimaryNavProps {
  className?: string;
  noHome?: boolean;
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ className, children, noHome }) => {
  const wrapperClasses = className ? `${className} ${styles.wrapper}` : styles.wrapper;

  return (
    <nav className={wrapperClasses}>
      <ul>
        {!noHome && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {children}
      </ul>
    </nav>
  );
}

export default PrimaryNav;
