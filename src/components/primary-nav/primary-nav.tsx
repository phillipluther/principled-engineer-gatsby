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
      <ul>
        {!noHome && (
          <li>
            <ALink to="/">Home</ALink>
          </li>
        )}
        <li>
          <ALink to="/about">About</ALink>
        </li>
        <li>
          <ALink to="/contact">Contact</ALink>
        </li>
        {children}
      </ul>
    </nav>
  );
}

export default PrimaryNav;
