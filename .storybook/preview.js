import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { MDXEmbedProvider } from 'mdx-embed';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <MDXEmbedProvider>{children}</MDXEmbedProvider>
      </DocsContainer>
    ),
  }
}