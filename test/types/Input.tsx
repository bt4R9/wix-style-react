import * as React from 'react';
import Input from '../../src/Input';
import {inputTestkitFactory} from '../../testkit';
import {inputTestkitFactory as inputEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

function testkits() {
  const vanilla = inputTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = inputEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function InputWithMandatoryProps() {
  return <Input />;
}

function InputWillAllProps() {
  return (
    <Input
      ariaControls="controls"
      ariaDescribedby="described"
      ariaLabel="label"
      autoFocus
      autoSelect
      autocomplete="asd"
      clearButton
      className="cls"
      customInput={<input />}
      dataHook="hook"
      defaultValue="value"
      disabled
      error
      errorMessage="msg"
      forceFocus
      forceHover
      help
      helpMessage="msg"
      id="id"
      max={1}
      maxLength={2}
      menuArrow
      min={3}
      name="name"
      noLeftBorderRadius
      noRightBorderRadius
      onBlur={e => undefined}
      onChange={e => undefined}
      onClear={e => undefined}
      onCompositionChange={e => undefined}
      onEnterPressed={e => undefined}
      onEscapePressed={e => undefined}
      onFocus={e => undefined}
      onInputClicked={e => undefined}
      onKeyDown={e => undefined}
      onKeyUp={e => undefined}
      onPaste={e => undefined}
      onTooltipShow={() => undefined}
      placeholder="place"
      prefix={<span />}
      readOnly
      required
      roundInput
      rtl
      size="large"
      status="error"
      statusMessage="msg"
      step={1}
      suffix={<span />}
      tabIndex={1}
      textOverflow="overflow"
      theme="amaterial"
      title="title"
      tooltipPlacement="auto"
      updateControlledOnClear
      withSelection
      value="value"
      type="asdsd"
    />
  );
}

function InputStandard() {
  return <Input forceHover />;
}

function InputReadOnly() {
  return <Input readOnly value="Read Only Input" />;
}

function InputError() {
  return <Input status="error" forceHover />;
}

function InputLoader() {
  return <Input status="loading" statusMessage="Loading some data..." />;
}

function InputAffix() {
  return (
    <Input
      prefix={<Input.Affix>@</Input.Affix>}
      suffix={<Input.Affix>$</Input.Affix>}
      status="error"
    />
  );
}

function InputIconAffix() {
  <Input
    prefix={
      <Input.IconAffix>
        <span />
      </Input.IconAffix>
    }
    suffix={
      <Input.IconAffix>
        <span />
      </Input.IconAffix>
    }
  />;
}

function InputSize() {
  return (
    <Input
      size="large"
      placeholder="They did not know it was impossible, so they did it!"
    />
  );
}

function InputRounded() {
  return (
    <Input
      size="small"
      placeholder="They did not know it was impossible, so they did it!"
      roundInput
    />
  );
}
