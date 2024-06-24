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
        imageUrl="http://localhost:3000/images/gold.jpg"
      />
    ),
  },
  {
    path: 'beach/:id', // the beach
    element: (
      <GamePage
        title="The beach"
        imageUrl="http://localhost:3000/images/beach.jpg"
      />
    ),
  },
  {
    path: 'blue/:id', // the blue
    element: (
      <GamePage
        title="The blue"
        imageUrl="http://localhost:3000/images/blue.jpg"
      />
    ),
  },
  {
    path: 'maze/:id', // the maze
    element: (
      <GamePage
        title="The maze"
        imageUrl="http://localhost:3000/images/maze.jpg"
      />
    ),
  },
  {
    path: 'white/:id', // the white
    element: (
      <GamePage
        title="The White"
        imageUrl="http://localhost:3000/images/white.jpg"
      />
    ),
  },
  {
    path: 'space/:id', // the space
    element: (
      <GamePage
        title="The Space"
        imageUrl="http://localhost:3000/images/space.jpg"
      />
    ),
  },
];
export default routes;
