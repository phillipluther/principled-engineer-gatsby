import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostList from '../components/post-list';

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { nodes: posts } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <PostList posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        ...PostSummaryProps
      }
    }
  }
`;
