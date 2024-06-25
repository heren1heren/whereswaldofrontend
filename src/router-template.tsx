import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import { Layout } from './components/Layout';
import { nanoid, random } from 'nanoid';

const App = () => {
  const id = nanoid();
  return (
    <Layout title={'where is waldo'}>
      {' '}
      <p>Choose a level:</p>
      <div className="level-grid h-75">
        <Link className="level-grid-item" to={`gold/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/gold.jpg"
            alt="where is waldo image"
          />
          The Gold
        </Link>
        <Link className="level-grid-item" to={`beach/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/beach.jpg"
            alt="where is waldo image"
          />
          The beach
        </Link>
        <Link className="level-grid-item" to={`blue/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/blue.jpg"
            alt="where is waldo image"
          />
          The Blue
        </Link>
        <Link className="level-grid-item" to={`maze/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/maze.jpg"
            alt="where is waldo image"
          />
          The Maze
        </Link>
        <Link className="level-grid-item" to={`white/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/white.jpg"
            alt="where is waldo image"
          />
          The White
        </Link>
        <Link className="level-grid-item" to={`space/${id}`}>
          <img
            className="img-template"
            src="https://veil-selective-witch.glitch.me/images/space.jpg"
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
