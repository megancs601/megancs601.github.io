import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/portfolio/i);
  const projectsBtn = page.getByRole('button', { name: /projects/i });
  const aboutBtn = page.getByRole('button', { name: /about me/i });
  const resumeBtn = page.getByRole('link', { name: /resumé/i });

  await aboutBtn.click();
  await expect(page.getByRole('heading', { name: /about me/i })).toBeInViewport();

  //nav is hidden
  await expect(page.getByRole('banner')).toHaveClass('hide');

  // scroll up a bit to see navigation again
  await page.getByRole('heading', { name: /about me/i }).hover();
  await page.mouse.wheel(0, -100);

  await projectsBtn.click();
  await expect(page.getByRole('heading', { name: /projects/i })).toBeInViewport();

  const popupPromise = page.waitForEvent('popup');
  await resumeBtn.click();
  const popup = await popupPromise;
  await popup.title();
});
