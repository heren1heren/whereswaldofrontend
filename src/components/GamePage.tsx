import { FC, useEffect, useRef, useState } from 'react';
import { Layout } from './Layout';
import { Navigate } from 'react-router-dom';
import { normalizingCoordinate } from '../util';
import { isContained } from '../util';
import { GamePageProps, ClockProps } from '../typeDeclaration';
// should get a whole Game page component file
export const Clock: FC<ClockProps> = () => {
  // trigger count up from back end and at the same time run this Clock
  //todo : make a count up
  /**
   *
   */
  return <div className=" fs-3"> 00:00:00</div>;
};

export const GamePage: FC<GamePageProps> = ({ title, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const [isEnded, setIsEnded] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState(false);
  const [isAnswer, setIsAnswer] = useState<boolean>();
  const [coordinate, setCoordinate] = useState<number[]>();
  const [containerSize, setContainerSize] = useState<number[]>([]);
  const [circleCoordinate, setCircleCoordinate] = useState<number[]>(); // this can be calculated from coordinate
  const [isDisplay, setIsDisplay] = useState(false);
  const [boxCoordinate, setBoxCoordinate] = useState<number[]>(); // this can be calculated from coordinate
  const array = [
    330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344,
    345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359,
    360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370,
  ];

  useEffect(() => {
    // need to wait after the image is finished load
    // need to handle loading state
    if (!isLoading)
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
    setCircleCoordinate([
      e.nativeEvent.offsetX - 10,
      e.nativeEvent.offsetY - 10,
    ]);
    setBoxCoordinate([e.nativeEvent.offsetX + 40, e.nativeEvent.offsetY - 80]);
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
    <Layout title={title} haveRecord={true}>
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
        {circleCoordinate && isAnswerDisplay ? (
          <div
            className={`circle ${isAnswer ? 'correct-circle' : 'wrong-circle'}`}
            style={{ left: circleCoordinate[0], top: circleCoordinate[1] }}
          />
        ) : (
          <></>
        )}
        {isDisplay && circleCoordinate && boxCoordinate ? (
          <>
            <div
              className="circle"
              style={{ left: circleCoordinate[0], top: circleCoordinate[1] }}
            ></div>
            <div
              className="box"
              style={{ left: boxCoordinate[0], top: boxCoordinate[1] }}
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
