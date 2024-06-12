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
    path: 'map1', // new element
    element: <GamePage title="The gold" imageUrl="src/assets/theGold.jpg" />,
  },
  {
    path: 'map2', // the beach
    element: <GamePage title="The beach" imageUrl="src/assets/beach.jpg" />,
  },
  {
    path: 'map3', // the blue
    element: <GamePage title="The blue" imageUrl="src/assets/blue.jpg" />,
  },
  {
    path: 'map4', // the maze
    element: <GamePage title="The maze" imageUrl="src/assets/maze.jpg" />,
  },
  {
    path: 'map5', // the white
    element: (
      <GamePage title="The White" imageUrl="src/assets/snowMountain.jpg" />
    ),
  },
  {
    path: 'map6', // the space
    element: <GamePage title="The Space" imageUrl="src/assets/space.jpg" />,
  },
];
export default routes;
