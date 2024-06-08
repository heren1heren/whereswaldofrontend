import App, { ErrorPage, GamePage } from './router-template';

const routes = [
  // should using Outlet for App element with gamePage children
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
