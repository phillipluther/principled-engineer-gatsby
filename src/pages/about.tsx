import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = (
  {
    data: {
      site: {
        siteMetadata: { title },
      },
    },
  },
  location,
) => (
  <Layout title={title} location={location}>
    <Helmet title={`About ${title}`} />
    <div>
      <h1>About {title}</h1>
      <p>... info about the site ...</p>
    </div>
  </Layout>
);

export default AboutPage;

export const aboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
