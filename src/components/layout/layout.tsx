import * as React from 'react';
import Header from '../header';
import Footer from '../footer';

import * as styles from './layout.module.css';

interface LayoutProps {
  title: string;
  location: any;
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <>
      <Header title={title} location={location} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
