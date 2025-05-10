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

export const scrollUp = async (page, isMobile = false) => {
  if (isMobile) {
    await page.evaluate(() => window.scrollBy(0, -100));
    return;
  }
  await page.mouse.wheel(0, -100);
};

export const scrollDown = async (page, isMobile = false) => {
  if (isMobile) {
    await page.evaluate(() => window.scrollBy(0, 100));
    return;
  }
  await page.mouse.wheel(0, 100);
};
