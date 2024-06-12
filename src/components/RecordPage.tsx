import { FC } from 'react';
import { Layout } from './Layout';

import { RecordProps } from '../typeDeclaration';
export const Record: FC<RecordProps> = () => {
  // fetch inside useEffect

  return (
    <Layout title="Record">
      {' '}
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Time</th>
              <th scope="col"> Level</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td scope="row">1</td>
              <td>noname</td>
              <td>00:00:00</td>
              <td>The Space</td>
            </tr>
            <tr className="">
              <td scope="row">2</td>
              <td>Grass</td>
              <td>00:00:01</td>
              <td>The Maze</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
