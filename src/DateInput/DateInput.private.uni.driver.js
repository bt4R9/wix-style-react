import { dateInputDriverFactory as publicDriverFactory } from './DateInput.uni.driver';
import { testkit } from '../Input/Input.uni.driver';

export const dateInputPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    hasDateIcon: () => base.$('[data-hook="date-input-date-icon"]').exists(),
    getInputDriver: () => testkit(base.$('[data-hook="date-input-input"]')),
    // Add here driver methods that considered "private"
  };
};