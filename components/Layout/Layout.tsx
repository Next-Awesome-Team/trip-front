import React, { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-28">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
