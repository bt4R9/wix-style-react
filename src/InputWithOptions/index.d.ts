import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';
import {DropdownLayoutProps, DropdownLayoutValueOption} from '../DropdownLayout';
import {InputProps} from '../Input';

export type InputWithOptionsProps = WixComponentProps &
  DropdownLayoutProps &
  InputProps & {
    autocomplete?: string;
    inputElement?: JSX.Element;
    closeOnSelect?: boolean;
    onManuallyInput?: (inputValue: string, suggestedOption: DropdownLayoutValueOption) => void;
    valueParser?: (option: DropdownLayoutValueOption) => DropdownLayoutValueOption['value'];
    dropdownWidth?: string;
    dropdownOffsetLeft?: string;
    showOptionsIfEmptyInput?: boolean;
    highlight?: boolean;
  };

export default class InputWithOptions extends WixComponent<
  InputWithOptionsProps
> {}
