// write test for normalizing Coordinate and other utils
export function normalizingCoordinate(
  coordinates: number[],
  containerSize = [1872, 1177.18]
) {
  const normalContainerSize = [1872, 1177.18];
  const scaleRatio = containerSize[0] / normalContainerSize[0];
  console.log(scaleRatio);
  console.log(containerSize);
  console.log(normalContainerSize);
  const normalizedCoordinate: number[] = [];
  normalizedCoordinate.push(Math.round(coordinates[0] * scaleRatio));
  normalizedCoordinate.push(Math.round(coordinates[1] * scaleRatio));
  console.log(coordinates);
  console.log(normalizedCoordinate);
  return normalizedCoordinate; // should be 352,520
}

export const isContained = (array: number[], number: number) => {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) return true;
  }

  return false;
};

//* custom hook
