import * as React from 'react';
import { IconElement } from '../index';
import { PopoverMenuProps } from '../PopoverMenu';

export interface TableActionCellProps {
  dataHook?: string;
  primaryAction?: {
    text: string;
    theme?: TableActionCellPrimaryActionTheme;
    onClick(): void;
    disabled?: boolean;
  };
  secondaryActions?: {
    text: string;
    icon: IconElement;
    onClick(): void;
    disabled?: boolean;
  }[];
  numOfVisibleSecondaryActions?: number;
  alwaysShowSecondaryActions?: boolean;
  popoverMenuProps?: PopoverMenuProps;
}

export type TableActionCellPrimaryActionTheme = 'whiteblue' | 'fullblue';

declare const TableActionCell: React.SFC<TableActionCellProps>;
export default TableActionCell;
