import WixComponent, {WixComponentProps} from '../BaseComponents/WixComponent';
import {TooltipProps} from '../Tooltip';

export interface InputAreaProps extends WixComponentProps {
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  dataHook?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  forceFocus?: boolean;
  forceHover?: boolean;
  hasCounter?: boolean;
  id?: string;
  name?: string;
  maxHeight?: string;
  maxLength?: number;
  menuArrow?: boolean;
  minHeight?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClear?: any; // ?
  onEnterPressed?: () => void;
  onEscapePressed?: () => void;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onTooltipShow?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  resizable?: boolean;
  rows?: number;
  autoGrow?: boolean;
  minRowsAutoGrow?: number;
  style?: InputeAreaStyle;
  tabIndex?: number;
  theme?: InputAreaTheme;
  tooltipPlacement?: TooltipProps['placement'];
  value?: string;
}

export default class InputArea extends WixComponent<InputAreaProps> {}

export type InputAreaTheme = 'normal' | 'paneltitle' | 'material' | 'amaterial';

export type InputeAreaStyle =
  | 'normal'
  | 'paneltitle'
  | 'material'
  | 'amaterial';
