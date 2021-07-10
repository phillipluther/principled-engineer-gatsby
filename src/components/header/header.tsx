import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import VisuallyHidden from '@reach/visually-hidden';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import PrimaryNav from '../primary-nav';
import SocialLinks from '../social-links';
import Link from '../link';
import Logo from '../../images/principled-engineer-logo-flag.inline.svg';

import * as styles from './header.module.css';

const portalEl = typeof document !== 'undefined' ? document.getElementById('portal') : null;

const Header: React.FC<RouteComponentProps> = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const TitleTag = isRootPath ? 'h1' : 'p';
  const useCondensedMenu = !useMediaQuery({ query: '(min-width: 640px)' });
  const { title } = data.site.siteMetadata;
  const [isMenuOpen, toggleMenu] = React.useState(false);

  let releaseFocusTrap: Function;

  return (
    <>
      <header className={styles.wrapper}>
        <Link external href="#skipNav" className={styles.skipNav}>Skip to Content</Link>

        <TitleTag className={styles.title}>
          <Link to="/" className={styles.homeLink} id="homeLink">
            <VisuallyHidden>{title}</VisuallyHidden>
            <Logo role="presentation" alt="" />
          </Link>
        </TitleTag>

        {useCondensedMenu && (
          <>
            <button
              className={classnames(styles.trigger, { [styles.open]: isMenuOpen })}
              aria-controls="primaryMenu"
              aria-expanded={isMenuOpen}
              onClick={() => toggleMenu(!isMenuOpen)}
            >
              <span className={styles.hamburger} />
              <span className={styles.menuLabel} aria-hidden="true">
                <span>M</span>
                <span>E</span>
                <span>N</span>
                <span>U</span>
              </span>
              <VisuallyHidden>
                {`Menu is ${isMenuOpen ? 'open' : 'closed'};`}
                {` click to ${isMenuOpen ? 'close' : 'open'}`}
              </VisuallyHidden>
            </button>
            <CSSTransition
              in={isMenuOpen}
              timeout={420}
              classNames={{
                enter: styles.menuEnter,
                enterActive: styles.menuEnterActive,
                exit: styles.menuExit,
                exitActive: styles.menuExitActive,
              }}
              unmountOnExit
            >
              <div className={styles.drawer}>
                <PrimaryNav className={styles.nav} />
                <SocialLinks />
              </div>
            </CSSTransition>
          </>
        )}

        {!useCondensedMenu ? (
          <>
            <PrimaryNav className={styles.nav} />
            <SocialLinks />
          </>
        ) : null}
      </header>
      <a id="skipNav" />
    </>
  );
};

export default Header;
