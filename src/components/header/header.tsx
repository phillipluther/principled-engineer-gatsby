import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import VisuallyHidden from '@reach/visually-hidden';
import { useMediaQuery } from 'react-responsive';
import PrimaryNav from '../primary-nav';
import SocialLinks from '../social-links';
import Link from '../link';
import Logo from '../../images/principled-engineer-logo-flag.inline.svg';

import * as styles from './header.module.css';

const Header: React.FC<RouteComponentProps> = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const TitleTag = isRootPath ? 'h1' : 'p';
  const showSupplementalBranding = isRootPath || isDesktop;
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <header className={styles.wrapper}>
        <Link external href="#skipNav" className={styles.skipNav}>Skip to Content</Link>

        <TitleTag className={styles.title}>
          <Link to="/" className={styles.homeLink}>
            <VisuallyHidden>{title}</VisuallyHidden>
            <Logo role="presentation" alt="" />
          </Link>
        </TitleTag>

        <PrimaryNav />
        <SocialLinks />
      </header>
      <a id="skipNav" />
    </>
  );
};

export default Header;
