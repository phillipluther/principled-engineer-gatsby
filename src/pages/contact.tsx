import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Link from '../components/link';

const ContactPage: React.FC<PageProps> = (
  {
    data: {
      site: {
        siteMetadata: { title, author, social },
      },
    },
  },
  location,
) => (
  <Layout title={`${title}: ContactInfo`} location={location}>
    <Helmet title={`${title}: Contact Info`} />
    <div>
      <h1>{title}: Contact Info</h1>
      <p>... contact information, social and email comes for free ...</p>

      <ul>
        <li>
          <Link external href={`mailto:${author.email}`}>
            {author.email}
          </Link>
        </li>
        {social.map(({ href, label }) => (
          <li key={href}>
            <Link external href={href}>
              {label}
            </Link>
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
