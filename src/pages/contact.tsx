import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const ContactPage: React.FC<PageProps> = ({
  data: {
    site: {
      siteMetadata: {
        title,
        author,
        social,
      },
    },
  },
}, location) => (
  <Layout title={`${title}: ContactInfo`} location={location}>
    <Helmet title={`${title}: Contact Info`} />
    <div>
      <h1>{title}: Contact Info</h1>
      <p>... contact information, social and email comes for free ...</p>

      <ul>
        <li>
          <a href={`mailto:${author.email}`}>{author.email}</a>
        </li>
        {social.map(({ href, label }) => (
          <li>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default ContactPage;

export const contactPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          email
        }
        social {
          href
          label
        }
      }
    }
  }
`;
