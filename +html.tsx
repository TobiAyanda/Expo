import type { PropsWithChildren } from 'react';

export default function RootHtml({ children }) {
  return <html lang="en">{children}</html>;
}