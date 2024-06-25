import App, { ErrorPage } from './router-template';
import { GamePage } from './components/GamePage';
import { Record } from './components/RecordPage';
const routes = [
  // Only call app when using outlet
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'records',
    element: <Record />,
  },
  {
    path: 'gold/:id', // new element
    element: (
      <GamePage
        title="The gold"
        imageUrl="https://veil-selective-witch.glitch.me/images/gold.jpg"
      />
    ),
  },
  {
    path: 'beach/:id', // the beach
    element: (
      <GamePage
        title="The beach"
        imageUrl="https://veil-selective-witch.glitch.me/images/beach.jpg"
      />
    ),
  },
  {
    path: 'blue/:id', // the blue
    element: (
      <GamePage
        title="The blue"
        imageUrl="https://veil-selective-witch.glitch.me/images/blue.jpg"
      />
    ),
  },
  {
    path: 'maze/:id', // the maze
    element: (
      <GamePage
        title="The maze"
        imageUrl="https://veil-selective-witch.glitch.me/images/maze.jpg"
      />
    ),
  },
  {
    path: 'white/:id', // the white
    element: (
      <GamePage
        title="The White"
        imageUrl="https://veil-selective-witch.glitch.me/images/white.jpg"
      />
    ),
  },
  {
    path: 'space/:id', // the space
    element: (
      <GamePage
        title="The Space"
        imageUrl="https://veil-selective-witch.glitch.me/images/space.jpg"
      />
    ),
  },
];
export default routes;
