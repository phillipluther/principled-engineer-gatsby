/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;
  const authorName = author?.name || 'Author Bio';
  const authorSummary = author?.summary;
  const authorEmail = author?.email;

  return (
    <aside className="bio">
      <h2 className="bio-name">About the Author, {authorName}</h2>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../../images/fpo.png"
        width={120}
        height={120}
        quality={95}
        alt={authorName}
      />
      {authorSummary && <p>{authorSummary || null}</p>}
      {authorEmail && <p><a href={`mailto:${authorEmail}`}>Email me</a></p>}
    </aside>
  );
};

export default Bio;
