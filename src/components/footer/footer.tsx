import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import PrimaryNav from '../primary-nav';
import SocialLinks from '../social-links';
import Link from '../link';

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title: siteTitle } = data.site.siteMetadata;

  return (
    <footer>
      <VisuallyHidden as="h2">Page Footer</VisuallyHidden>

      <section>
        <VisuallyHidden as="h3">Primary Navigation Menu</VisuallyHidden>
        <PrimaryNav className="footer-nav" />
      </section>

      <section>
        <VisuallyHidden as="h3">Find {siteTitle} on Social Media</VisuallyHidden>
        <SocialLinks />
      </section>

      <section>
        <VisuallyHidden as="h3">Disclaimers, Legal, and Copyright Info</VisuallyHidden>
        <p>
          All <Link to="/">{siteTitle}</Link> content is Copyright &copy; 2021 by Phillip Luther
          unless otherwise noted.
        </p>
        <p>
          All opinions expressed on <Link to="/">{siteTitle}</Link> belong to me, Phillip Luther,
          and do not necessarily reflect the views and opinions of any associated corporate entities
          or affiliated organizations.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
