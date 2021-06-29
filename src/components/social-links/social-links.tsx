import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import { IconType } from 'react-icons';
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPinterest,
} from 'react-icons/fa';
import Link from '../link';
import * as styles from './social-links.module.css';

const SocialLinks: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            href
            label
          }
        }
      }
    }
  `);

  return (
    <ul className={styles.wrapper}>
      {data.site.siteMetadata.social.map(({ href, label }) => {
        let Icon: IconType;

        // TODO: there's assuredly a _much_ better way to do this; look into it someday
        if (/twitter\.com/.test(href)) {
          Icon = FaTwitter;
        } else if (/linkedin\.com/.test(href)) {
          Icon = FaLinkedin;
        } else if (/youtube\.com/.test(href)) {
          Icon = FaYoutube;
        } else if (/instagram\.com/.test(href)) {
          Icon = FaInstagram;
        } else if (/pinterest\.com/.test(href)) {
          Icon = FaPinterest;
        } else {
          Icon = FaEnvelope;
        }

        return (
          <li key={href}>
            <Link external href={href}>
              <VisuallyHidden>{label}</VisuallyHidden>
              <Icon role="presentation" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
