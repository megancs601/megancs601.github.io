import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/vue';
import TheFooter from '../TheFooter.vue';

const getLinkButton = (name) => {
  return screen.getByRole('link', { name });
};

const renderPage = () => {
  return render(TheFooter);
};

it('renders properly', async () => {
  renderPage();

  screen.getByRole('img', { name: /megan smith/i });
  screen.getByRole('heading', { level: 3, name: /about me/i });

  screen.getAllByRole('link', { name: /linkedin/i }).forEach((link) => {
    expect(link.href).toEqual('https://www.linkedin.com/in/mcsmith601');
  });

  expect(getLinkButton(/github/i).href).toEqual('https://github.com/megancs601');
});
