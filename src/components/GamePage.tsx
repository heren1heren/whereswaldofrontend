import { FC, useEffect, useRef, useState } from 'react';
import { Layout } from './Layout';
import { Navigate } from 'react-router-dom';
import { normalizingCoordinate } from '../util';
import { isContained } from '../util';
import { GamePageProps, ClockProps } from '../typeDeclaration';

export const Clock: FC<ClockProps> = () => {
  // trigger count up from back end and at the same time run this Clock

  const [miliSeconds, setMiliSeconds] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setMiliSeconds((miliSeconds) => miliSeconds + 1);
    }, 1000 / 60);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div className=" fs-3">
      {' '}
      {Math.round((miliSeconds / 3600) % 60)}:
      {Math.round((miliSeconds / 60) % 60)}:{miliSeconds % 60}
    </div>
  );
};

export const GamePage: FC<GamePageProps> = ({ title, imageUrl }) => {
  //states
  const ref = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState(false);
  const [isAnswer, setIsAnswer] = useState<boolean>();
  const [coordinate, setCoordinate] = useState<number[]>();
  const [containerSize, setContainerSize] = useState<number[]>([]);
  const [isDisplay, setIsDisplay] = useState(false);
  //variables
  // fetch coordinate depends on title props
  switch (title) {
    case 'the blue':
      break;
    case 'the white':
      break;
    case 'the space':
      break;
    case 'the gold':
      break;
    case 'the maze':
      break;
    case 'the beach':
      break;

    default:
      break;
  }
  const array = [
    330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344,
    345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359,
    360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370,
  ];
  const boxCoordinates = [];
  const circleCoordinates = [];
  if (coordinate) {
    boxCoordinates.push(coordinate[0] + 40, coordinate[1] - 80);
    circleCoordinates.push(coordinate[0] - 10, coordinate[1] - 10);
  }

  useEffect(() => {
    // need to wait after the image is finished load
    // need to handle loading state
    if (!isLoading && ref.current)
      setContainerSize([ref.current.clientWidth, ref.current.clientHeight]);
  }, [isLoading]);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    const correctCoordinate = normalizingCoordinate([
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
    ]);
    // coordinates are not matched
    console.log(
      `true coordinate: ${[e.nativeEvent.offsetX, e.nativeEvent.offsetY]}`
    );
    console.log(` normalized coordinate: ${correctCoordinate}`);
    setCoordinate(correctCoordinate);

    setIsDisplay((state) => !state);
    setIsAnswerDisplay(false);
  };
  const handleOnChoose = () => {
    if (coordinate && isContained(array, coordinate[0])) {
      setIsDisplay((state) => !state);
      setIsAnswer(true);
      setIsAnswerDisplay(true);
      // end
      setIsEnded(true);
    } else {
      setIsDisplay((state) => !state);
      setIsAnswerDisplay(true);
      setIsAnswer(false);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNavigate(true);
  };
  if (isNavigate) return <Navigate to="/records" />;
  return (
    <Layout title={title}>
      {' '}
      <Clock />
      <div className="interact-container">
        {
          //* onclick  display logic
        }
        {isEnded ? (
          <div className="form-wrapper modal">
            <form
              className="mb-3 d-flex gap-2  flex-column  fs-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="form-label">
                Player Name:
              </label>
              <input
                type="text"
                className="form-control "
                name="username"
                id="username"
                aria-describedby="helpId"
                placeholder="your name"
              />
              <button className="btn btn-primary"> submit</button>
            </form>
          </div>
        ) : (
          <></>
        )}
        {circleCoordinates && isAnswerDisplay ? (
          <div
            className={`circle ${isAnswer ? 'correct-circle' : 'wrong-circle'}`}
            style={{ left: circleCoordinates[0], top: circleCoordinates[1] }}
          />
        ) : (
          <></>
        )}
        {isDisplay && circleCoordinates && boxCoordinates ? (
          <>
            <div
              className="circle"
              style={{ left: circleCoordinates[0], top: circleCoordinates[1] }}
            ></div>
            <div
              className="box"
              style={{ left: boxCoordinates[0], top: boxCoordinates[1] }}
            >
              <button className="btn  bg-info-subtle" onClick={handleOnChoose}>
                {' '}
                <img src="src/assets/source-3550580007.gif" alt="waldo" />
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <img
          ref={ref}
          src={imageUrl}
          alt={title}
          className=" w-100 interactImage "
          onClick={handleOnClick}
        />
      </div>
    </Layout>
  );
};
