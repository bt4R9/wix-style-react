import React from 'react';
import sinon from 'sinon';
import editableRowDriverFactory from './EditableRow.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import EditableRow from './EditableRow';

describe('EditableRow', () => {
  const createDriver = createDriverFactory(editableRowDriverFactory);
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should focus on input when mounted', () => {
    const driver = createDriver(<EditableRow {...props} />);
    expect(driver.isInputFocused()).toEqual(true);
  });

  it('should toggle accept button disabled state according to input presence', () => {
    const driver = createDriver(<EditableRow {...props} />);
    expect(driver.isApproveDisabled()).toBe(true);
    driver.setText('new option');
    expect(driver.isApproveDisabled()).toBe(false);
  });

  it('should set input text from props', () => {
    const text = 'new option';
    props.newOption = text;
    const driver = createDriver(<EditableRow {...props} />);
    expect(driver.getText()).toEqual(text);
  });

  it('should trigger onApprove callback when approve button is clicked', () => {
    props.onApprove = sinon.spy();
    const driver = createDriver(<EditableRow {...props} />);
    const text = 'new option';
    driver.setText(text);
    driver.clickApprove();
    expect(props.onApprove.calledOnce).toBe(true);
    expect(props.onApprove.calledWith(text)).toBe(true);
  });

  it('should trigger onApprove callback when enter key is pressed', () => {
    props.onApprove = sinon.spy();
    const driver = createDriver(<EditableRow {...props} />);
    const text = 'new option';
    driver.setText(text);
    driver.keyDown(13); //enter
    expect(props.onApprove.calledOnce).toBe(true);
    expect(props.onApprove.calledWith(text)).toBe(true);
  });

  it('should trigger onCancel callback when cancel button is clicked', () => {
    props.onCancel = sinon.spy();
    const driver = createDriver(<EditableRow {...props} />);
    driver.clickCancel();
    expect(props.onCancel.calledOnce).toBe(true);
  });

  it('should trigger onCancel callback when escape key is pressed', () => {
    props.onCancel = sinon.spy();
    const driver = createDriver(<EditableRow {...props} />);
    driver.keyDown(27); //esc
    expect(props.onCancel.calledOnce).toBe(true);
  });
});
