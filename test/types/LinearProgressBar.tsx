import * as React from 'react';
import LinearProgressBar from '../../src/LinearProgressBar';
import {linearProgressBarTestkitFactory} from '../../testkit';
import {linearProgressBarTestkitFactory as linearProgressBarEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

async function testkits() {
  const vanilla = linearProgressBarTestkitFactory({
    dataHook: 'hoo',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = linearProgressBarEnzymeTestkitFactory({
    dataHook: 'hoo',
    wrapper: mount(<div />)
  });
}

function LinearProgressBarWithMandatoryProps() {
  return <LinearProgressBar />;
}

function LinearProgressBarWithAllProps() {
  return (
    <LinearProgressBar
      error
      errorMessage="ms"
      light
      showProgressIndication
      value={100}
    />
  );
}
