import { render, screen } from '@testing-library/react';
import App from '../router-template';

// need to put the component inside a router to test it
import { MemoryRouter } from 'react-router-dom';
describe('initializing home page test ', () => {
  it('init', () => {
    // get all links
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(9);
  });
});
