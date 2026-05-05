import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--nova-bg))]">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}