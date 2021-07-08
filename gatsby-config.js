const packageData = require('./package.json');

const title = 'The Principled Engineer';

module.exports = {
  siteMetadata: {
    title,
    author: {
      name: 'Phillip Luther',
      summary: `<p>Phillip (Phil) Luther builds web applications and has clocked nearly 20 years in the frontend trenches. He remembers when jQuery was new and still shudders when thinking of sliding door jelly buttons. His current areas of interest include web accessibility, the web audio API, and digital (ethics|privacy|rights). If pressed, he prefers Vue to React ... but only by the narrowest margin.</p><p>Phil currently works as an actively-coding engineering manager in San Francisco, CA.</p>`,
      email: 'dev@phillipluther.com',
      twitter: 'phillipluther',
      linkedIn: 'phillipluther',
    },
    description: 'HTML/CSS/JavaScript tutorials, modern engineering techniques, and stories from 20 years in the frontend trenches',
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
              maxWidth: 760,
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-portal',
      options: {
        key: 'portal',
        id: 'portal',
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
        background_color: '#fffbeb',
        theme_color: '#374151',
        display: 'minimal-ui',
        icon: 'src/images/principled-engineer-badge-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-gatsby-cloud',
  ],
};
