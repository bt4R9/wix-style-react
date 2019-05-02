import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { ButtonDriver } from '../Button/Button.uni.driver';
import { TooltipDriver } from '../Tooltip/Tooltip.uni.driver';
import { PopoverMenuDriver } from '../PopoverMenu/PopoverMenu.driver';

export interface TableActionCellDriver extends BaseDriver {
  element(): HTMLElement;
  getPrimaryActionButtonDriver(): ButtonDriver;
  clickPrimaryActionButton(): Promise<void>;
  getIsPrimaryActionButtonDisabled(): Promise<boolean>;
  getVisibleActionsCount(): HTMLElement | null;
  getHiddenActionsCount(): number;
  getVisibleActionTooltipDriver(index: number): TooltipDriver;
  getVisibleActionButtonDriver(index: number): ButtonDriver;
  getHiddenActionsPopoverMenuDriver(): PopoverMenuDriver;
  clickVisibleAction(): Promise<void>;
  clickPopoverMenu(): void;
  clickHiddenAction(actionIndex: number): void;
}
