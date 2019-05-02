import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {DropdownLayoutDriver} from '../DropdownLayout/DropdownLayout.driver';
import {InputDriver} from '../Input/Input.driver';
import * as ReactTestUtils from 'react-dom/test-utils';

export interface InputWithOptionsDriver extends BaseDriver {
  inputDriver: InputDriver;
  dropdownLayoutDriver: DropdownLayoutDriver;
  driver: {
    exists: () => boolean;
    selectOptionById: (id: string | number) => void;
    isReadOnly: () => boolean;
    isEditable: () => boolean;
    isDisabled: () => boolean;
    inputWrapper: () => HTMLElement;
    focus: () => void;
    blur: () => void;
    pressKey: (key: ReactTestUtils.SyntheticEventData['key']) => void;
    outsideClick: () => void;
    isOptionWrappedToHighlighter: (optionId: string | number) => void;
  };
}