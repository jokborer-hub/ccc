'use client';

import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import MobileOptimizer from '@/components/MobileOptimizer/MobileOptimizer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <MobileOptimizer>
      <Navigation />
      {children}
    </MobileOptimizer>
  );
}