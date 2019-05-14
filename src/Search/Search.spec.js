import React from 'react';

import searchDriverFactory from './Search.driver';
import Search from './Search';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import { makeControlled } from '../../test/utils';

describe('Search', () => {
  const REGEXP_SPECIAL_CHARS = '^$\\.*+?)(][}{|';

  const options = [
    'The quick',
    'brown',
    'fox',
    'jumps over',
    'the lazy',
    'dog',
    REGEXP_SPECIAL_CHARS,
  ].map((value, index) => ({ id: index, value }));
  const createDriver = createDriverFactory(searchDriverFactory);

  describe('Controlled', () => {
    const ControlledSearch = makeControlled(Search);

    it('should show search options if initial value passed and down-key pressed', () => {
      const driver = createDriver(
        <ControlledSearch value="the" options={options} />,
      );

      expect(driver.dropdownLayoutDriver.isShown()).toBe(false);
      driver.driver.pressKey('ArrowDown');
      expect(driver.dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should not show search options when focusing empty input', () => {
      const driver = createDriver(<ControlledSearch options={options} />);

      expect(driver.dropdownLayoutDriver.isShown()).toBe(false);
      driver.inputDriver.focus();
      expect(driver.dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should show search options when focusing empty input with showOptionsIfEmptyInput', () => {
      const driver = createDriver(
        <ControlledSearch options={options} showOptionsIfEmptyInput />,
      );

      expect(driver.dropdownLayoutDriver.isShown()).toBe(false);
      driver.inputDriver.click();
      expect(driver.dropdownLayoutDriver.isShown()).toBe(true);
    });

    it('should filter search options if initial input value passed and input focused', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="fox" />,
      );

      driver.inputDriver.focus();
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(1);
    });

    it('should not treat spaces around search text as part of query', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="  fox  " />,
      );

      driver.inputDriver.focus();
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(1);
    });

    it('should render required elements of Search box', () => {
      const driver = createDriver(<ControlledSearch options={options} />);

      expect(driver.inputDriver.hasPrefix()).toBe(true);
      expect(driver.inputDriver.getPlaceholder()).toBe('Search');
      expect(driver.inputDriver.hasMenuArrow()).toBe(false);
    });

    it('should render clear text button if input is not empty', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="fox" />,
      );

      expect(driver.inputDriver.hasClearButton()).toBe(true);
    });

    it('should remain focused on Search component after clear button click', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="fox" />,
      );

      driver.inputDriver.clickClear();
      expect(driver.inputDriver.isFocus()).toBe(true);
    });

    it('should collapse search options after clear button click', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="fox" />,
      );

      driver.inputDriver.clickClear();
      expect(driver.dropdownLayoutDriver.isShown()).toBe(false);
    });

    it('should do search when text was entered', () => {
      const driver = createDriver(<ControlledSearch options={options} />);

      driver.inputDriver.focus();
      driver.inputDriver.enterText('fox');
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(1);
      driver.inputDriver.clearText();
      driver.inputDriver.enterText('the');
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(2);
      driver.inputDriver.clearText();
      driver.inputDriver.enterText('');
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(options.length);
    });

    it('should treat regex characters as text', () => {
      const driver = createDriver(<ControlledSearch options={options} />);

      driver.inputDriver.focus();
      driver.inputDriver.enterText(REGEXP_SPECIAL_CHARS);
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(1);
    });

    it('should show no results if nothing was found in options', () => {
      const driver = createDriver(<ControlledSearch options={options} />);

      driver.inputDriver.focus();
      driver.inputDriver.enterText('option nowhere to be found');
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(0);
    });

    // TODO: enhance Input component
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('should focus search input if click on magnifying glass', () => {
      const driver = createDriver(
        <ControlledSearch options={options} value="fox" />,
      );

      driver.inputDriver.clickSuffix();
      expect(driver.inputDriver.isFocus()).toBe(true);
    });

    it('should allow filtering options by predicate', () => {
      const nodeOptions = [
        { id: 1, value: <div>Found me</div>, keywords: ['Found'] },
        { id: 2, value: <div>Filtered me</div>, keywords: ['Filtered'] },
      ];
      const predicate = jest.fn(option => {
        return option.keywords.includes('Found');
      });
      const driver = createDriver(
        <ControlledSearch options={nodeOptions} predicate={predicate} />,
      );
      driver.inputDriver.enterText('Some text value');
      expect(predicate).toHaveBeenCalled();
      expect(driver.dropdownLayoutDriver.optionsLength()).toBe(1);
    });

    it('should highlight the matched options text', () => {
      const driver = createDriver(
        <ControlledSearch value="the" options={options} />,
      );

      expect(
        driver.dropdownLayoutDriver.optionAt(0).querySelector('strong')
          .textContent,
      ).toContain('The');
    });

    describe('updateControlledOnClear is true', () => {
      it('should NOT trigger onChange on clearing', async () => {
        const onChange = jest.fn();
        const { inputDriver } = createDriver(
          <Search
            value="fox"
            onChange={onChange}
            clearButton
            updateControlledOnClear
          />,
        );
        expect(onChange).toHaveBeenCalledTimes(0);
        await inputDriver.clickClear();
        expect(onChange).toHaveBeenCalledTimes(0);
      });

      it('should trigger onClear on clearing', async () => {
        const onClear = jest.fn();
        const { inputDriver } = createDriver(
          <Search
            options={options}
            value="fox"
            onChange={() => {}}
            clearButton
            onClear={onClear}
            updateControlledOnClear
          />,
        );
        expect(onClear).toHaveBeenCalledTimes(0);
        await inputDriver.clickClear();
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(onClear.mock.calls[0][0]).toBeTruthy;
      });
    });
  });

  describe('Uncontrolled', () => {
    it('should filter search options if initial defaultValue value passed and input focused', () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <Search options={options} defaultValue="fox" />,
      );

      inputDriver.focus();
      expect(dropdownLayoutDriver.optionsLength()).toBe(1);
    });
  });

  describe('Expandable', () => {
    it('should start as collapsed element by default when expndable=true', () => {
      const { driver } = createDriver(<Search options={options} expandable />);

      expect(driver.isExpandable()).toBeTruthy();
      expect(driver.isCollapsed()).toBeTruthy();
    });

    it('should extend the search input when clicked', () => {
      const { driver, inputDriver } = createDriver(
        <Search options={options} expandable />,
      );

      expect(driver.isCollapsed()).toBeTruthy();
      inputDriver.click();
      expect(driver.isCollapsed()).toBeFalsy();
    });

    it('should be focused on the input after expanding the search component', () => {
      const { inputDriver } = createDriver(
        <Search options={options} expandable />,
      );

      expect(inputDriver.isFocus()).toBeFalsy();
      inputDriver.click();
      expect(inputDriver.isFocus()).toBeTruthy();
    });

    it('should not collapse the input if the input has no value and blurred', () => {
      const { inputDriver, driver } = createDriver(
        <Search options={options} expandable />,
      );

      inputDriver.click();
      inputDriver.enterText('wix');
      inputDriver.blur();
      expect(driver.isCollapsed()).toBeFalsy();
    });

    it('should collapse the input if the input has no value and blurred', () => {
      const { inputDriver, driver } = createDriver(
        <Search options={options} expandable />,
      );

      inputDriver.click();
      inputDriver.blur();
      expect(driver.isCollapsed()).toBeTruthy();
    });

    it('should have non-collapsed input when expandaple=true and the input has initial value', () => {
      const { driver } = createDriver(
        <Search options={options} expandable defaultValue={'Test'} />,
      );

      expect(driver.isExpandable()).toBeTruthy();
      expect(driver.isCollapsed()).toBeFalsy();
    });

    it('should not be collapsed by default', () => {
      const { driver, inputDriver } = createDriver(
        <Search options={options} />,
      );

      expect(driver.isExpandable()).toBeFalsy();
      expect(driver.isCollapsed()).toBeFalsy();
      inputDriver.click();
      expect(driver.isCollapsed()).toBeFalsy();
    });
    it('should not be collapsed when specified with autoFocus', () => {
      const { driver } = createDriver(
        <Search expandable autoFocus options={options} />,
      );

      expect(driver.isExpandable()).toBeTruthy();
      expect(driver.isCollapsed()).toBeFalsy();
    });
  });

  describe('debounced', () => {
    it('should debounce onChange callback if debounceMs prop is provided', () => {
      jest.useFakeTimers();

      const onChangeSpy = jest.fn();
      const driver = createDriver(
        <Search onChange={onChangeSpy} debounceMs={100} />,
      );

      driver.inputDriver.enterText('f');
      jest.advanceTimersByTime(99);

      expect(onChangeSpy).not.toHaveBeenCalled();

      driver.inputDriver.enterText('fo');
      jest.advanceTimersByTime(99);

      expect(onChangeSpy).not.toHaveBeenCalled();

      driver.inputDriver.enterText('foo');
      jest.advanceTimersByTime(100);

      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy.mock.calls[0][0].target.value).toBe('foo');
    });

    it('should not debounce onChange callback if debounceMs prop is not provided', () => {
      jest.useFakeTimers();

      const onChangeSpy = jest.fn();
      const driver = createDriver(<Search onChange={onChangeSpy} />);

      driver.inputDriver.enterText('f');

      expect(onChangeSpy).toHaveBeenCalledTimes(1);

      driver.inputDriver.enterText('fo');
      jest.advanceTimersByTime(99);

      expect(onChangeSpy).toHaveBeenCalledTimes(2);

      driver.inputDriver.enterText('foo');
      jest.advanceTimersByTime(100);

      expect(onChangeSpy).toHaveBeenCalledTimes(3);
      expect(onChangeSpy.mock.calls[0][0].target.value).toBe('f');
      expect(onChangeSpy.mock.calls[1][0].target.value).toBe('fo');
      expect(onChangeSpy.mock.calls[2][0].target.value).toBe('foo');
    });
  });
});
