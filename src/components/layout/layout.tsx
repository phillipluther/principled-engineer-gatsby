import * as React from 'react';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  title: string;
  location: any;
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header title={title} location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
