import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Analytics } from '@vercel/analytics/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <div className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
