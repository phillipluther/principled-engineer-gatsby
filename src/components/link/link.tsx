import * as React from 'react';
import { GatsbyLinkProps, Link as GLink } from 'gatsby';
import * as styles from './link.module.css';

interface LinkProps extends GatsbyLinkProps<any> {
  external?: boolean;
  className?: string;
}

// TODO: figure out how to type this appropriately; the anchor being either a
// JSX intrinsic ('a' tag) or Gatsby link is causing grief
const Link: React.FC<LinkProps> = ({ children, external, className, ...tagProps }) => {
  const LinkTag = external ? 'a' : GLink;
  const tagClasses = [styles.link];

  if (className) {
    tagClasses.push(className);
  }

  return (
    <LinkTag className={tagClasses.join(' ')} {...tagProps}>
      {children}
    </LinkTag>
  );
};

export default Link;
