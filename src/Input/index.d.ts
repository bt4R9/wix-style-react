import * as React from 'react';
import {TooltipProps} from '../Tooltip';

export interface InputProps {
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  autocomplete?: string;
  dataHook?: string;
  defaultValue?: string;
  disabled?: boolean;
  status?: InputStatus;
  statusMessage?: React.ReactNode;
  /**
   * @deprecated
   * @see status
   */
  error?: boolean;
  /**
   * @deprecated
   * @see statusMessage
   */
  errorMessage?: React.ReactNode;
  forceFocus?: boolean;
  forceHover?: boolean;
  help?: boolean;
  helpMessage?: React.ReactNode;
  id?: string;
  maxLength?: number;
  menuArrow?: boolean;
  clearButton?: boolean;
  className?: string;
  name?: string;
  noLeftBorderRadius?: boolean;
  noRightBorderRadius?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onClear?: React.MouseEventHandler<HTMLElement>;
  onCompositionChange?: (isComposing: boolean) => void;
  onEnterPressed?: React.KeyboardEventHandler<HTMLElement>;
  onEscapePressed?: React.KeyboardEventHandler<HTMLElement>;
  onFocus?: (e?: FocusEvent) => void;
  onInputClicked?: React.MouseEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onPaste?: React.ClipboardEventHandler<HTMLElement>;
  onTooltipShow?: () => void;
  placeholder?: string;
  prefix?: React.ReactNode;
  readOnly?: boolean;
  roundInput?: boolean;
  rtl?: boolean;
  size?: InputSize;
  suffix?: React.ReactNode;
  tabIndex?: number;
  textOverflow?: string;
  theme?: InputTheme;
  title?: string;
  tooltipPlacement?: TooltipProps['placement'];
  type?: string;
  value?: string | number;
  withSelection?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  customInput?: React.ReactElement | Function;
  updateControlledOnClear?: boolean;
}

export default class Input extends React.Component<InputProps> {
  static Ticker: React.SFC<TickerProps>;
  static Unit: React.SFC<UnitProps>;
  static IconAffix: React.SFC<IconAffixProps>;
  static Affix: React.SFC<AffixProps>;
  static Group: React.SFC;
  static StatusError: InputStatusError;
  static StatusLoading: InputStatusLoading;
}

type EmptyOnFocusFn = () => void;

export type InputStatus = InputStatusError | InputStatusLoading;

export type InputStatusError = 'error';

export type InputStatusLoading = 'loading';

export type InputSize = 'small' | 'normal' | 'large';

export type InputTheme =
  | 'normal'
  | 'tags'
  | 'paneltitle'
  | 'material'
  | 'amaterial'
  | 'flat'
  | 'flatdark';

interface TickerProps {
  onUp?: React.MouseEventHandler<HTMLElement>;
  onDown?: React.MouseEventHandler<HTMLElement>;
  upDisabled?: boolean;
  downDisabled?: boolean;
}

interface UnitProps {
  value?: string;
}

interface IconAffixProps {
  children: JSX.Element;
}

interface AffixProps {
  value?: string;
}
