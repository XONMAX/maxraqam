import type { ReactNode } from 'react';
import '../globals.css';
import { RootHtml, rootMetadata, rootViewport } from '@/lib/root-layout';

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function UzRootLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="uz">{children}</RootHtml>;
}
