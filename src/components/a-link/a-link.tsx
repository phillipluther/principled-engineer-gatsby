import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './a-link.module.css';

// TODO: figure out how to type this appropriately; the anchor being either a
// JSX intrinsic ('a' tag) or Gatsby link is causing grief
const ALink = ({
  children,
  external,
  className,
  ...tagProps
}) => {
  const LinkTag = external ? 'a' : Link;
  const tagClasses = className ? `${styles.link} ${className}` : styles.link;

  return (<LinkTag className={tagClasses} {...tagProps}>{children}</LinkTag>);
}

export default ALink;
