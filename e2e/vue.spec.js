import { test, expect } from '@playwright/test';
import { scrollDown, scrollUp, tabExists } from './utils';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/portfolio/i);
});

test('header buttons and behavior', async ({ page, isMobile }) => {
  await page.goto('/');

  const resumeLink = page.getByRole('link', { name: /resumé/i });
  const projectsBtn = page.getByRole('button', { name: /projects/i });
  const aboutBtn = page.getByRole('button', { name: /about me/i });

  aboutBtn.click();
  await expect(page.getByRole('heading', { name: /about me/i })).toBeInViewport();

  // nav is hidden b/c of page scrolling down
  await expect(page.getByRole('banner')).toHaveClass('hide');

  // scroll up a bit to see navigation again
  await scrollUp(page, isMobile);
  await expect(page.getByRole('banner')).not.toHaveClass('hide');

  // scroll down to hide nav
  await scrollDown(page, isMobile);
  await expect(page.getByRole('banner')).toHaveClass('hide');

  // tab focus shows the nav again (desktop only)
  // else  scroll up again to show nav
  if (isMobile) {
    await scrollUp(page, isMobile);
  } else {
    await page.keyboard.press('Tab');
    await expect(resumeLink).toBeFocused();
  }

  projectsBtn.click();
  await expect(page.getByRole('heading', { name: /projects/i })).toBeInViewport();

  // clicking resumé opens new tab
  await tabExists(page, resumeLink);
});

test('footer links', async ({ page }) => {
  await page.goto('/');

  page.getByRole('button', { name: /about me/i }).click();
  await expect(page.getByRole('heading', { name: /about me/i })).toBeInViewport();

  const linkedin = page.getByRole('link', { name: /linkedin/i });
  await tabExists(page, linkedin, /linkedin/i);

  const github = page.getByRole('link', { name: /github/i });
  await tabExists(page, github, /megancs601/i);
});
