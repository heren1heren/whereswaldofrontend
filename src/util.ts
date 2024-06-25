import axios from 'axios';
import { useEffect, useState } from 'react';
import { coordinateObject } from './typeDeclaration';

// write test for normalizing Coordinate and other utils
export function normalizingCoordinate(
  coordinates: number[],
  containerSize = [1872, 1177.18]
) {
  const normalContainerSize = [1872, 1177.18];
  const scaleRatio = containerSize[0] / normalContainerSize[0];

  const normalizedCoordinate: number[] = [];
  normalizedCoordinate.push(Math.round(coordinates[0] * scaleRatio));
  normalizedCoordinate.push(Math.round(coordinates[1] * scaleRatio));
  // console.log(coordinates);
  // console.log(normalizedCoordinate);
  return normalizedCoordinate; // should be 352,520
}

export const isContained = (array: number[], number: number) => {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) return true;
  }

  return false;
};
export const generatingApproximateCoordinate = (
  //todo need test file
  xCoordinate: number,
  containerSize = [1872, 1177.18]
) => {
  const normalContainerSize = [1872, 1177.18];
  const scaleRatio = containerSize[0] / normalContainerSize[0];
  // console.log(xCoordinate);
  // console.log(scaleRatio);

  const approximateNumber = 30;
  const min = Math.round((xCoordinate - approximateNumber) * scaleRatio);
  const max = Math.round((xCoordinate + approximateNumber) * scaleRatio);
  // console.log(min);
  // console.log(max);

  const approximateCoordinates: number[] = [];
  for (let i = min; i <= max; i++) {
    approximateCoordinates.push(i);
  }
  return approximateCoordinates;
};
//* custom hook
type recordType = {
  username: string;
  map: string;
  duration: number;
  id: string;
};
export const useRecordFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState<string>();
  const [data, setData] = useState<recordType[]>();
  useEffect(() => {
    (async () => {
      try {
        //todo : get a Type for response data
        const res = await axios.get(url);

        // sort by time from backend
        setData(res.data.records);
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { isLoading, errors, data };
};
export const useFetch = (url: string, title: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState<coordinateObject>();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        res.data.coordinates.forEach((data: coordinateObject) => {
          // should not sort before fetch
          // should sort it later
          if (data.map.toLowerCase() === title.toLowerCase()) {
            setData(data);
          }
        });
      } catch (error) {
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, title]);
  return { isLoading, data, errors };
};

export const useDeleteIncompleteRecords = (url: string) => {
  const [errors, setErrors] = useState<unknown>();

  useEffect(() => {
    // useEffect should only do one job -> refactor later
    (async () => {
      try {
        await axios.delete(url);
      } catch (error) {
        setErrors(error);
      }
    })();
  });

  return { errors };
};
export const useStartRecord = (url: string, data: object) => {
  const [errors, setErrors] = useState<unknown>();
  useEffect(() => {
    // useEffect should only do one job -> refactor later
    (async () => {
      try {
        await axios.post(url, data);
      } catch (error) {
        setErrors(error);
      }
    })();
  }, [url, data]);

  return { errors };
};
