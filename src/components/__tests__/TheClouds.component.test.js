import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/vue';
import TheClouds from '../TheClouds.vue';

const renderPage = () => {
  return render(TheClouds);
};

it('renders properly', async () => {
  renderPage();

  const clouds = screen.getAllByRole('img', { name: /foreground cloud/i });
  expect(clouds).toHaveLength(6);

  clouds.forEach((cloud) => {
    expect(cloud.className).toEqual('dark-cloud');
  });
});
