import * as React from 'react';
import TableActionCell from '../../src/TableActionCell';
import {tableActionCellTestkitFactory} from '../../testkit';
import {tableActionCellTestkitFactory as tableActionCellEnzymeTestkitFactory} from '../../testkit/enzyme';
import { mount } from 'enzyme';

async function testkits() {
  const vanilla = tableActionCellTestkitFactory({
    dataHook: 'hoooooook',
    wrapper: document.createElement('div'),
  });

  vanilla.clickHiddenAction(1);

  const enzyme = tableActionCellEnzymeTestkitFactory({
    dataHook: 'h000000000000k',
    wrapper: mount(<div/>),
  });

  await enzyme.clickVisibleAction();
}

function TableActionCellWithMandatoryProps() {
  return <TableActionCell />;
}

function TableActionCellWithAllProps() {
  return <TableActionCell
    dataHook="hi"
    alwaysShowSecondaryActions
    numOfVisibleSecondaryActions={3}
    popoverMenuProps={{}}
    primaryAction={{
      disabled: true,
      text: 'hi',
      onClick: () => console.log('clicked!'),
      theme: 'fullblue',
    }}
    secondaryActions={[
      {
        disabled: true,
        icon: <div />,
        text: 'hi',
        onClick: () => console.log('clicked!!!'),
      }
    ]}
  />;
}
