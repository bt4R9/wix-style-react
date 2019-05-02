import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import * as ReactTestUtils from 'react-dom/test-utils';
import {InputeAreaStyle} from '.';

export interface InputAreaDriver extends BaseDriver {
  trigger: (
    trigger: keyof typeof ReactTestUtils.Simulate,
    event: ReactTestUtils.SyntheticEventData
  ) => void;
  focus: () => void;
  enterText: (text: string) => void;
  getValue: () => string;
  getName: () => string;
  getPlaceholder: () => string;
  getDefaultValue: () => string;
  getRowsCount: () => number;
  getMaxLength: () => number;
  getTabIndex: () => number;
  getReadOnly: () => boolean;
  getResizable: () => boolean;
  getDisabled: () => boolean;
  getHasCounter: () => boolean;
  getCounterValue: () => string;
  hasExclamation: () => boolean;
  hasError: () => boolean;
  isFocusedStyle: () => boolean;
  isHoveredStyle: () => boolean;
  isOfStyle: (style: InputeAreaStyle) => boolean;
  isFocus: () => boolean;
  getStyle: () => CSSStyleDeclaration;
  getAriaLabel: () => string;
  getAriaControls: () => string;
  getAriaDescribedby: () => string;
  getTooltipDataHook: () => string;
  getTooltipElement: () => HTMLElement;
}
