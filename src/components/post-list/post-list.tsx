import * as React from 'react';
import PostSummary from '../post-summary';

import * as styles from './post-list.module.css';

const PostList: React.FC = ({ posts }) => (
  <ol className={styles.wrapper}>
    {posts.map((post) => {
      const { slug } = post.fields;
      const { excerpt } = post;
      const { description, ...summaryProps } = post.frontmatter;

      return (
        <li className={styles.item} key={post.fields.slug}>
          <PostSummary slug={slug} description={description || excerpt} {...summaryProps} />
        </li>
      );
    })}
  </ol>
);

export default PostList;
