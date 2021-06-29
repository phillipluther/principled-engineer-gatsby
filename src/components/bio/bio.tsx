import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Link from '../link';

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            email
            twitter
            linkedIn
          }
        }
      }
    }
  `);

  const { name, summary, email, twitter, linkedIn } = data.site.siteMetadata.author;

  return (
    <aside className="bio">
      <h2 className="bio-name">About the Author: {name}</h2>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../../images/portraitAvatar.png"
        width={120}
        height={120}
        quality={95}
        alt={name}
      />
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <h3>Contact the Author</h3>
      <ul>
        <li>
          <Link external href={`https://twitter.com/${twitter}`}>
            {`@${twitter}`} on Twitter
          </Link>
        </li>
        <li>
          <Link external href={`mailto:${email}`}>
            Email {email}
          </Link>
        </li>
        <li>
          <Link external href={`https://linkedin/in/${linkedIn}`}>
            Connect on LinkedIn
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Bio;
