import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostSummary from '../components/post-summary';

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { nodes: posts } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol>
        {posts.map((post) => {
          const { slug } = post.fields;
          const { excerpt } = post;
          const { description, ...summaryProps } = post.frontmatter;

          return (
            <li key={post.fields.slug}>
              <PostSummary slug={slug} description={description || excerpt} {...summaryProps} />
            </li>
          );
        })}
      </ol>
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
