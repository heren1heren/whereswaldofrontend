import { FC, useEffect, useRef, useState } from 'react';
import { Layout } from './Layout';
import { Navigate, useParams } from 'react-router-dom';
import { generatingApproximateCoordinate, useFetch } from '../util';
import { isContained } from '../util';
import { GamePageProps, coordinateObject } from '../typeDeclaration';
import axios from 'axios';
import { Clock } from './Clock';

export const GamePage: FC<GamePageProps> = ({ title, imageUrl }) => {
  //states
  //todo refactor
  const params = useParams();
  const [input, setInput] = useState('');
  const ref = useRef<HTMLImageElement>(null);

  const [isEnded, setIsEnded] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState(false);
  const [isAnswer, setIsAnswer] = useState<boolean>();
  const [coordinate, setCoordinate] = useState<number[]>();
  const [containerSize, setContainerSize] = useState<number[]>([]);
  const [isDisplay, setIsDisplay] = useState(false);

  const {
    isLoading,
    data: coordinateData,
    errors,
  } = useFetch('http://localhost:3000/coordinates', title);

  useEffect(() => {
    if (!isLoading && ref.current)
      setContainerSize([ref.current.clientWidth, ref.current.clientHeight]);
  }, [isLoading, ref.current?.clientHeight]); // my ref.current is linked to an image
  // as my understand this useEffect should run again everytime I zoom in or zoom out my website? should it?
  // because while I zoom in or zoom out my website, my image container's size changes
  //todo :refactor useEffect to a custom useHook named: useLoading
  useEffect(() => {
    // useEffect should only do one job -> refactor later
    (async () => {
      try {
        await axios.delete('http://localhost:3000/deleteIncompleteRecords');

        await axios.post(`http://localhost:3000/startRecordPost/`, {
          map: title,
          id: params.id,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [title, isLoading, params.id]);
  // variables
  let approximateCoordinates: number[] = [];
  const boxCoordinates = [];
  const circleCoordinates = [];
  if (coordinate) {
    boxCoordinates.push(coordinate[0] + 40, coordinate[1] - 80);
    circleCoordinates.push(coordinate[0] - 10, coordinate[1] - 10);
  }
  if (coordinateData) {
    approximateCoordinates = generatingApproximateCoordinate(
      coordinateData.xCoordinate,
      containerSize
    );
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(
      ` click coordinate: ${[e.nativeEvent.offsetX, e.nativeEvent.offsetY]}`
    );
    setCoordinate([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);

    setIsDisplay((state) => !state);
    setIsAnswerDisplay(false);
  };
  const handleOnChoose = () => {
    console.log(`choose coordinate: ${coordinate[0]}`);
    console.log(approximateCoordinates);

    if (coordinate && isContained(approximateCoordinates, coordinate[0])) {
      // update end timer
      setIsDisplay((state) => !state);
      setIsAnswer(true);
      setIsAnswerDisplay(true);
      // end
      (async () => {
        await axios.put('http://localhost:3000/endRecordPut', {
          id: params.id,
        });
      })();

      setIsEnded(true);
    } else {
      setIsDisplay((state) => !state);
      setIsAnswerDisplay(true);
      setIsAnswer(false);
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (async () => {
      try {
        await axios.put('http://localhost:3000/usernameRecordPut', {
          username: input,
          id: params.id,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsNavigate(true);
      }
    })();
  };
  if (errors) return <div>{errors}</div>;
  if (isNavigate) return <Navigate to="/records" />;
  return (
    <Layout title={title}>
      {' '}
      <Clock isStop={isEnded} />
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
                onChange={handleInput}
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
                <img src="http://localhost:3000/images/waldo.gif" alt="waldo" />
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
