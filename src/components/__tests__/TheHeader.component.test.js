import { expect, it, vi } from 'vitest';
import TheHeader from '../TheHeader.vue';
import { fireEvent, render, screen } from '@testing-library/vue';

const getButton = (name) => {
  return screen.getByRole('button', { name });
};

const getLinkButton = (name) => {
  return screen.getByRole('link', { name });
};

const clickHandler = vi.fn();
const focusHandler = vi.fn();

const renderPage = () => {
  return render(TheHeader, { props: { clickHandler, focusHandler } });
};

it('renders properly with expected behaviors', async () => {
  renderPage();

  // check click handler
  await fireEvent.click(getButton(/projects/i));
  expect(clickHandler).toHaveBeenCalledTimes(1);

  await fireEvent.click(getButton(/about me/i));
  expect(clickHandler).toHaveBeenCalledTimes(2);

  // check focus handler
  await fireEvent.focus(getButton(/projects/i));
  expect(focusHandler).toHaveBeenCalledTimes(1);

  await fireEvent.focus(getButton(/about me/i));
  expect(focusHandler).toHaveBeenCalledTimes(2);

  await fireEvent.focus(getLinkButton(/resumé/i));
  expect(focusHandler).toHaveBeenCalledTimes(3);
});
