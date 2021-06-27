import * as React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import * as styles from './a-link.module.css';

interface ALinkProps extends GatsbyLinkProps<any> {
  external?: boolean;
  className?: string;
};

// TODO: figure out how to type this appropriately; the anchor being either a
// JSX intrinsic ('a' tag) or Gatsby link is causing grief
const ALink: React.FC<ALinkProps> = ({
  children,
  external,
  className,
  ...tagProps
}) => {
  const LinkTag = external ? 'a' : Link;
  const tagClasses = className ? `${styles.link} ${className}` : styles.link;

  return (<LinkTag className={tagClasses} {...tagProps}>{children}</LinkTag>);
};

export default ALink;
