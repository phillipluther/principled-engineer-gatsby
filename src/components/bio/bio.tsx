import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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

  const {
    name,
    summary,
    email,
    twitter,
    linkedIn,
  } = data.site.siteMetadata.author;

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
          <a href={`https://twitter.com/${twitter}`}>
            {`@${twitter}`} on Twitter
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`}>Email {email}</a>
        </li>
        <li>
          <a href={`https://linkedin/in/${linkedIn}`}>Connect on LinkedIn</a>
        </li>
      </ul>
    </aside>
  );
};

export default Bio;
