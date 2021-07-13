import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import PostSummary from '../post-summary';
import * as styles from './post-list.module.css';

interface PostProps {
  // TODO: tighten this up
  fields: any,
  frontmatter: any,
  excerpt: string,
}

interface PostListProps {
  title: string,
  posts: PostProps[],
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => (
  <>
    <VisuallyHidden as="h2">{title || 'Posts'}</VisuallyHidden>
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
  </>
);

export default PostList;
