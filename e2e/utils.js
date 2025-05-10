import { expect } from '@playwright/test';

// tests buttons that opens new tabs
export const tabExists = async (page, button, title = '') => {
  const popupPromise = page.waitForEvent('popup');
  await button.click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  await expect(popup).toHaveTitle(title);
  popup.close();
};
