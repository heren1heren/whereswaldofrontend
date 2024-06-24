import { render, screen } from '@testing-library/react';
import { GamePage } from './GamePage';
import { MemoryRouter } from 'react-router-dom';
describe('initializing test ', () => {
  it('init', () => {
    const component = render(
      <MemoryRouter>
        <GamePage title="test" imageUrl="src/assets/blue.jpg" />
      </MemoryRouter>
    );
    expect(GamePage).toMatchSnapshot();
    expect(screen.getByRole('link', { name: 'Record' }));
  });
  // it ('gamepage render correctly with image') from backend
  // it('gamepage contains image that can be interacted and can be measured corrected')

  //*userevent inside the game page component
});
