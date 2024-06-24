import { normalizingCoordinate, isContained } from './util';
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
  it('init', () => {
    expect(isContained([1, 2, 3], 1)).toBeTruthy();
    expect(isContained([1, 2, 3], 0)).not.toBeTruthy();
  });
});
