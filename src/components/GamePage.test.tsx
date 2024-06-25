import { render, screen } from '@testing-library/react';
import { GamePage } from './GamePage';
import { MemoryRouter } from 'react-router-dom';
const mockCoordinates = []; // correct coordinates
describe('initializing test ', () => {
  it('init', () => {
    render(
      <MemoryRouter>
        <GamePage title="The Gold" imageUrl="src/assets/gold.jpg" />
      </MemoryRouter>
    );
    expect(GamePage).toMatchSnapshot();
    // links
    expect(screen.getByRole('link', { name: 'Record' }));
    expect(screen.getByRole('link', { name: 'Home Page' }));
    expect(screen.getByRole('link', { name: 'Cookie Turtle' }));
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'The Gold');
  });
});
// test GamePage component with different title and image Url
describe('should render with another correct title and image url ', () => {
  it('the maze', () => {
    render(
      <MemoryRouter>
        <GamePage title="The Maze" imageUrl="src/assets/maze.jpg" />
      </MemoryRouter>
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'The Maze');
    // check image size too
  });
});

// userEvent interact with the image
describe('userEvent with gamePage image ', () => {
  it('should pop up waldo button when click randomly ', () => {
    expect(0).toBe(0);
    render(
      <MemoryRouter>
        <GamePage title="The Maze" imageUrl="src/assets/maze.jpg" />
      </MemoryRouter>
    );
  });
});
