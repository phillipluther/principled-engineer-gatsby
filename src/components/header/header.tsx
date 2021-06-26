import * as React from 'react';
import { Link } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import SocialLinks from '../social-links';
import Logo from '../../images/principled-engineer-logo.inline.svg';

import * as styles from './header.module.css';
import '@reach/skip-nav/styles.css';

export interface HeaderProps extends RouteComponentProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const TitleTag = isRootPath ? 'h1' : 'p';

  return (
    <>
      <header className={styles.wrapper}>
        <SkipNavLink />

        <TitleTag className={styles.title}>
          <Link to="/" className={styles.homeLink}>
            <VisuallyHidden>{title}</VisuallyHidden>
            <Logo role="presentation" alt="" />
          </Link>
        </TitleTag>

        <PrimaryNav />
        <SocialLinks />
      </header>
      <SkipNavContent />
    </>
  );
};

export default Header;
