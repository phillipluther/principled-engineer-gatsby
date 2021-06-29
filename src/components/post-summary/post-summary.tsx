import * as React from 'react';
import { graphql } from 'gatsby';
import dashify from 'dashify';
import VisuallyHidden from '@reach/visually-hidden';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Link from '../link';

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
    <article className="post-summary">
      <header>
        <h3>
          <Link to={slug} tabIndex={-1}>
            {title}
          </Link>
        </h3>
        <p>{date}</p>

        {coverImage && (
          <Link to={slug} tabIndex={-1}>
            <GatsbyImage image={getImage(coverImage)} alt={title} role="presentation" />
          </Link>
        )}
      </header>

      <div>{description}</div>

      <footer>
        <Link to={slug}>
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
