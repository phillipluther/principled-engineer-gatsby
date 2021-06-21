import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import dashify from 'dashify';
import Layout from '../components/layout';

const pageTitle = 'Browse Post Categories';

const TagsPage: React.FC<PageProps> = ({
  data: {
    allMarkdownRemark: { group },
  },
}, location) => (
  <Layout title={pageTitle} location={location}>
    <Helmet title={pageTitle} />
    <div>
      <h1>{pageTitle}</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${dashify(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;

export const tagsPageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
