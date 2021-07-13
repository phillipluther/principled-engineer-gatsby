import * as React from 'react';
import { graphql } from 'gatsby';
import dashify from 'dashify';
import VisuallyHidden from '@reach/visually-hidden';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from '../link';

import * as styles from './post-summary.module.css';

interface PostSummaryProps {
  title: string;
  description: string;
  date: string;
  coverImage: any; // fix me
  slug: string;
  tags: string[];
}

const PostSummary: React.FC<PostSummaryProps> = ({
  title,
  description,
  date,
  coverImage,
  slug,
  tags,
}) => {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <Link to={slug} tabIndex={-1} className={styles.titleLink}>
            {title}
          </Link>
        </h3>
        <p className={styles.date}>{date}</p>

        {coverImage && (
          <Link to={slug} tabIndex={-1} className={styles.imageLink}>
            <GatsbyImage
              className={styles.cover}
              image={getImage(coverImage)}
              alt={title}
              role="presentation"
            />
          </Link>
        )}
      </header>

      <p className={styles.description}>{description}</p>

      <footer>
        <Link to={slug} className={styles.cta}>
          <FaAngleDoubleRight role="presentation" />
          Read More
          <VisuallyHidden> of {title}</VisuallyHidden>
        </Link>

        <h4>More Like This</h4>
        <ul className="tags">
          {tags.map((tag) => {
            const dashedTag = dashify(tag);

            return (
              <li className="tag" key={dashedTag}>
                <Link to={`/tags/${dashedTag}`}>{tag}</Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </article>
  );
};

export default PostSummary;

export const postSummaryQuery = graphql`
  fragment PostSummaryProps on MarkdownRemark {
    fields {
      slug
    }
    excerpt(pruneLength: 160)
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      coverImage {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      tags
    }
  }
`;
