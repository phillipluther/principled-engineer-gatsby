const packageData = require('./package.json');

const title = 'The Principled Engineer';

module.exports = {
  siteMetadata: {
    title,
    author: {
      name: 'Phillip Luther',
      summary: `<p>Phillip (Phil) Luther builds web applications and has clocked nearly 20 years in the frontend trenches. He remembers when jQuery was new and still shudders when thinking of sliding door jelly buttons. His current areas of interest include web accessibility, the web audio API, and digital (ethics|privacy|rights). If pressed, he prefers Vue to React ... but only by the narrowest margin. Feel free to <a href="mailto:dev@phillipluther.com">ask him why</a>.</p><p>Phil currently works as an actively-coding engineering manager in San Francisco, CA.</p>`,
      email: 'dev@phillipluther.com',
      twitter: 'phillipluther',
      linkedIn: 'phillipluther',
    },
    description: packageData.description,
    siteUrl: packageData.homepage,
    social: [
      {
        href: 'https://twitter.com/phillipluther',
        label: '@prinengineer on Twitter',
      },
      {
        href: 'mailto:phil@principledengineer.com',
        label: 'Email phil@principledengineer.com',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
                {
                  allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    nodes {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-gatsby-cloud',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
