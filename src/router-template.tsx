import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Layout title={'where is waldo'}>
      {' '}
      <p>Choose a level:</p>
      <div className="level-grid h-75">
        <Link className="level-grid-item" to="map1">
          <img
            className="img-template"
            src="src/assets/theGold.jpg"
            alt="where is waldo image"
          />
          The Gold
        </Link>
        <Link className="level-grid-item" to="map2">
          <img
            className="img-template"
            src="src/assets/beach.jpg"
            alt="where is waldo image"
          />
          The beach
        </Link>
        <Link className="level-grid-item" to="map3">
          <img
            className="img-template"
            src="src/assets/blue.jpg"
            alt="where is waldo image"
          />
          The Blue
        </Link>
        <Link className="level-grid-item" to="map4">
          <img
            className="img-template"
            src="src/assets/maze.jpg"
            alt="where is waldo image"
          />
          The Maze
        </Link>
        <Link className="level-grid-item" to="map5">
          <img
            className="img-template"
            src="src/assets/snowMountain.jpg"
            alt="where is waldo image"
          />
          The White
        </Link>
        <Link className="level-grid-item" to="map6">
          <img
            className="img-template"
            src="src/assets/space.jpg"
            alt="where is waldo image"
          />
          The Space
        </Link>
      </div>
    </Layout>
  );
};

export const ErrorPage: FC = () => {
  return (
    <div>
      {' '}
      error page.
      <Link to="/"> Go Back</Link>
    </div>
  );
};

export default App;
