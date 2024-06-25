import react from 'react';
import { vi } from 'vitest';
import {
  normalizingCoordinate,
  isContained,
  generatingApproximateCoordinate,
  useDeleteIncompleteRecords,
  useFetch,
  useRecordFetch,
  useStartRecord,
} from './util';
vi.mock('./mockComponents', () => {
  const firstComponent = () => <div></div>;
  return firstComponent;
});
import { firstComponent } from './mockComponents';
describe('normalizing coordinate function testing ', () => {
  it('return an array of coordinate', () => {
    //
    expect(normalizingCoordinate([352, 520])).not.toEqual([]);
    expect(normalizingCoordinate([352, 520])).toEqual([352, 520]);
    // expect 200% of container size will return ..
    // expect 50% of container size will return ..
  });
  it('return correct coordinate with bigger container size', () => {
    expect(normalizingCoordinate([50, 60], [1872 * 2, 1177.18 * 2])).toEqual([
      100, 120,
    ]);
  });
  it('return correct coordinate with smaller  container size', () => {
    expect(
      normalizingCoordinate([50, 60], [1872 * 0.5, 1177.18 * 0.5])
    ).toEqual([25, 30]);
  });
});
describe('initializing isContained test ', () => {
  it('return true if provide correct arguments', () => {
    expect(isContained([1, 2, 3], 1)).toBeTruthy();
    expect(isContained([1, 2, 3], 0)).not.toBeTruthy();
  });
});

describe('initializing generatingCoordinate function test ', () => {
  it('only return positive number array', () => {
    expect(generatingApproximateCoordinate(1000)).toContain(1000);
    expect(generatingApproximateCoordinate(1000, [1000, 500])).toContain(525);
  });
});

describe('initializing useDeleteIncompleteRecords test ', () => {
  it('call it inside a mock component', () => {});
});
// describe('initializing useFetch test ', () => {
//   it('init', () => {
//     expect(0).toBe(0);
//   });
// });

// describe('initializing useRecordFetch test ', () => {
//   it('init', () => {
//     expect(0).toBe(0);
//   });
// });
// describe('initializing useStartRecord', () => {
//   it('init', () => {
//     expect(0).toBe(0);
//   });
// });
