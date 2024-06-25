import { FC } from 'react';
import { Layout } from './Layout';

import { RecordProps, recordType } from '../typeDeclaration';
import { useDeleteIncompleteRecords, useRecordFetch } from '../util';
export const Record: FC<RecordProps> = () => {
  const { errors: deleteErrors } = useDeleteIncompleteRecords(
    'https://veil-selective-witch.glitch.me/IncompleteRecords'
  );

  const {
    isLoading,
    errors,
    data: records,
  } = useRecordFetch('https://veil-selective-witch.glitch.me/records');
  // errors here since we cannot render object
  console.log(deleteErrors);
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
