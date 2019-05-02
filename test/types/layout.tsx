import * as React from 'react';
import {Layout, Cell} from '../../src/Layout';

function LayoutWithMandatoryProps() {
  return (
    <Layout>
      <Cell>Left</Cell>
      <Cell>Middle</Cell>
      <Cell>Right</Cell>
    </Layout>
  );
}

function LabelWithAllProps() {
  return (
    <Layout alignItems="center" cols={12} gap="10px" justifyItems="center">
      <Cell span={6} vertical>Left</Cell>
      <Cell span={6} vertical>Middle</Cell>
    </Layout>
  );
}
