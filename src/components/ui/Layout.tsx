import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Analytics } from '@vercel/analytics/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </Container>
  );
};

export default Layout;
