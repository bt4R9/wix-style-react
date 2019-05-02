import * as React from 'react';
import InputArea from '../../src/InputArea';
import {inputAreaTestkitFactory} from '../../testkit';
import {inputAreaTestkitFactory as inputAreaEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = inputAreaTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = inputAreaEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function InputAreaWithMandatoryProps() {
  return <InputArea />;
}

function InputAreaWithAllProps() {
  return (
    <InputArea
      ariaControls="controls"
      ariaDescribedby="describe"
      ariaLabel="label"
      autoFocus
      autoGrow
      autoSelect
      dataHook="hook"
      defaultValue="value"
      disabled
      error
      errorMessage="msg"
      forceFocus
      forceHover
      hasCounter
      id="id"
      maxHeight="10px"
      maxLength={10}
      menuArrow
      minHeight="10px"      
      minRowsAutoGrow={10}
      name="name"
      onBlur={e => undefined}
      onChange={e => undefined}
      onEnterPressed={() => undefined}
      onEscapePressed={() => undefined}
      onFocus={e => undefined}
      onKeyDown={e => undefined}
      onKeyUp={e => undefined}
      onTooltipShow={() => undefined}
      placeholder="holder"
      readOnly
      resizable
      rows={10}
      style="amaterial"
      theme="amaterial"
      tabIndex={1}
      tooltipPlacement="auto"
      value="value"
    />
  );
}