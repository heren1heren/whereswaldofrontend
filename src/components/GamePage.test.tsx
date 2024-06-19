import { render, screen } from '@testing-library/react';
import { GamePage } from './GamePage';
describe('initializing test ', () => {
  it('init', () => {
    const component = render(
      <GamePage title="test" imageUrl="src/assets/blue.jpg" />
    );
    expect(GamePage).toMatchSnapshot();
    expect(screen.getByRole('link', { name: 'text' }).toBeInTheDocument());
  });
  // it ('gamepage render correctly with image')
  // it('gamepage contains image that can be interacted and can be measured corrected')
  //
});
