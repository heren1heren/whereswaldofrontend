import { FC, useEffect, useState } from 'react';
import { Layout } from './Layout';

import { RecordProps } from '../typeDeclaration';
import axios from 'axios';
import {
  useDeleteIncompleteRecords,
  usePageLoaded,
  useRecordFetch,
} from '../util';
type recordType = {
  username: string;
  map: string;
  duration: number;
  id: string;
};
export const Record: FC<RecordProps> = () => {
  // fetch inside useEffect
  // const [records, setRecords] = useState<recordType[]>();
  // const [isLoading, setIsLoading] = useState(true);
  const {
    isLoading,
    errors,
    data: records,
  } = useRecordFetch('http://localhost:3000/records');

  const { errors: deleteErrors } = useDeleteIncompleteRecords(
    'http://localhost:3000/deleteIncompleteRecords'
  );
  if (deleteErrors) return <div>{deleteErrors}</div>;
  if (errors) return <div>{errors}</div>;
  if (isLoading) return <div> ...Loading</div>;
  return (
    <Layout title="Record">
      {' '}
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Time(s)</th>
              <th scope="col"> Level</th>
            </tr>
          </thead>
          <tbody>
            {records ? (
              records.map((record: recordType, index: number) => {
                // console.log(record);
                return (
                  <tr className="" key={Math.random()}>
                    <td scope="row">{index}</td>
                    <td>{record.username}</td>
                    <td>{record.duration}</td>
                    <td>{record.map}</td>
                  </tr>
                );
              })
            ) : (
              <div> empty record</div>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
