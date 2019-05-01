import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.uni.driver';
import {BreadcrumbsDriver} from '../src/Breadcrumbs/Breadcrumbs.driver';
import {ButtonDriver} from '../src/Button/Button.uni.driver';
import {CalendarDriver} from '../src/Calendar/Calendar.driver';
import {CalendarPanelDriver} from '../src/CalendarPanel/CalendarPanel.driver';
import {CalendarPanelFooterDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {ThumbnailDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {TextButtonDriver} from '../src/TextButton/TextButton.uni.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';
import {TabsDriver} from '../src/Tabs/Tabs.driver';
import {DatePickerDriver} from '../src/DatePicker/DatePicker.driver';
import {DropdownBaseDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {LabelDriver} from '../src/Label/Label.driver';
import {DropdownLayoutDriver} from '../src/DropdownLayout/DropdownLayout.driver';
import {EditableSelectorDriver} from '../src/EditableSelector/EditableSelector.driver';
import {EmptyStateDriver} from '../src/EmptyState/EmptyState.driver';
import {FilePickerDriver} from '../src/FilePicker/FilePicker.driver';
import {FloatingHelperDriver} from '../src/FloatingHelper/FloatingHelper.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: EnzymeTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: EnzymeTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: EnzymeUniTestkitFactory<BoxDriver>;
  export const buttonTestkitFactory: EnzymeUniTestkitFactory<ButtonDriver>;
  export const breadcrumbsTestkitFactory: EnzymeTestkitFactory<BreadcrumbsDriver>;
  export const calendarTestkitFactory: EnzymeTestkitFactory<CalendarDriver>;
  export const calendarPanelTestkitFactory: EnzymeTestkitFactory<CalendarPanelDriver>
  export const calendarPanelFooterTestkitFactory: EnzymeUniTestkitFactory<CalendarPanelFooterDriver>;
  export const cardGalleryItemTestkitFactory: EnzymeUniTestkitFactory<CardGalleryItemDriver>
  export const checkboxTestkitFactory: EnzymeUniTestkitFactory<CheckboxDriver>;
  export const circularProgressBarTestkitFactory: EnzymeTestkitFactory<CircularProgressBarDriver>
  export const closeButtonTestkitFactory: EnzymeUniTestkitFactory<CloseButtonDriver>;
  export const colorPickerTestkitFactory: EnzymeTestkitFactory<ColorPickerDriver>;
  export const counterBadgeTestkitFactory: EnzymeTestkitFactory<CounterBadgeDriver>;
  export const datePickerTestkitFactory: EnzymeTestkitFactory<DatePickerDriver>;
  export const dropdownBaseTestkitFactory: EnzymeUniTestkitFactory<DropdownBaseDriver>;
  export const dropdownLayoutTestkitFactory: EnzymeTestkitFactory<DropdownLayoutDriver>;
  export const editableSelectorTestkitFactory: EnzymeTestkitFactory<EditableSelectorDriver>;
  export const emptyStateTestkitFactory: EnzymeTestkitFactory<EmptyStateDriver>;
  export const filePickerTestkitFactory: EnzymeTestkitFactory<FilePickerDriver>;
  export const floatingHelperTestkitFactory: EnzymeTestkitFactory<FloatingHelperDriver>;
  
  export const labelTestkitFactory: EnzymeTestkitFactory<LabelDriver>;
  export const tabsTestkitFactory: EnzymeTestkitFactory<TabsDriver>;
  export const tagTestkitFactory: EnzymeTestkitFactory<TagDriver>;
  export const textTestkitFactory: EnzymeTestkitFactory<TextDriver>;
  export const textButtonTestkitFactory: EnzymeUniTestkitFactory<TextButtonDriver>;
  export const thumbnailTestkitFactory: EnzymeUniTestkitFactory<ThumbnailDriver>;
  export const timeInputTestkitFactory: EnzymeTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: EnzymeTestkitFactory<ToggleSwitchDriver>;
  export const tooltipTestkitFactory: EnzymeUniTestkitFactory<TooltipDriver>;
}

export = EnzymeTestkit;
