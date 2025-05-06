import { expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/vue';
import TheProjects from '../TheProjects.vue';
import projects from '../../projects.json';

const renderPage = () => {
  return render(TheProjects);
};

it('renders properly', async () => {
  renderPage();

  screen.getByRole('heading', { level: 3, name: /projects/i });

  const projectCount = projects.length;
  const list = screen.getByRole('list');

  const images = within(list).getAllByRole('img', { name: /image of/i });
  expect(images).toHaveLength(projectCount);

  const links = within(list).getAllByRole('link');
  expect(links).toHaveLength(projectCount);

  const descriptions = screen.getAllByTestId(/description/i);
  expect(descriptions).toHaveLength(projectCount);

  const tags = screen.getAllByTestId(/tags/i);
  expect(tags).toHaveLength(projectCount);

  screen.getByTestId(/portfolio/i);
  screen.getByRole('link', { name: /source code/i });
});
