import React from 'react';

import Layout from '../components/Layout/Layout';
import { LayoutProps } from '../components/Layout/types';

const withLayout =
  <T extends object>(Component: React.ComponentType<T>, layoutProps: LayoutProps) =>
  (props: T) => {
    return (
      <Layout {...layoutProps}>
        <Component {...(props as T)} />
      </Layout>
    );
  };

export default withLayout;
