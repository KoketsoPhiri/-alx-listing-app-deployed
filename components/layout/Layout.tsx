// components/layout/Layout.tsx
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[160px] pb-12"> {/* Added padding-top to account for fixed header */}
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;