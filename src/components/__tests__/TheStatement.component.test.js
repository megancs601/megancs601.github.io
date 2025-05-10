import { it } from 'vitest';
import { render, screen } from '@testing-library/vue';
import TheStatement from '../TheStatement.vue';

const renderPage = () => {
  return render(TheStatement);
};

// eslint-disable-next-line
it('renders properly', () => {
  renderPage();

  screen.getByTitle(/portfolio icon/i);
  screen.getByRole('heading', { level: 3, name: /A front-end software and web developer/i });
});
