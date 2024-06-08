import { FC, ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { log } from 'console';
type LayoutType = {
  children: ReactNode;
  haveRecord: boolean;
  title: string;
};
const Layout = ({
  children,
  haveRecord,
  title = 'Where is waldo',
}: LayoutType) => {
  return (
    <div className=" d-flex  flex-column justify-content-between vh-100 text-center">
      <h1>{title}</h1>
      <nav className="nav justify-content-center  ">
        {/**
         * record link only appear inside game page
         */}
        {haveRecord ? (
          <Link to="record" className="nav-link ">
            {' '}
            Record
          </Link>
        ) : (
          <></>
        )}
        {haveRecord ? (
          <Link to="/" className="nav-link ">
            {' '}
            Home Page
          </Link>
        ) : (
          <></>
        )}
      </nav>
      <main className=" flex-grow-1 p-lg-4"> {children}</main>
      <footer className=" text-center bg-black text-white">
        {' '}
        Made By
        <a
          href="https://github.com/heren1heren/whereswaldofrontend"
          className=" ms-md-1  text-decoration-none"
        >
          Cookie Turtle
        </a>
      </footer>
    </div>
  );
};
const App = () => {
  //todo: 6 links to 6 levels whereisthewaldo
  /**
   * having a main section that contains 6 links to specific page
   * grid layout: 2 rows with 3 columns
   */
  return (
    <Layout>
      {' '}
      <p>Choose a level:</p>
      <div className="level-grid h-75">
        <Link className="level-grid-item" to="map1">
          <img
            className="img-template"
            src="src/assets/theGold.jpg"
            alt="where is waldo image"
          />
          The Gold
        </Link>
        <Link className="level-grid-item" to="map2">
          <img
            className="img-template"
            src="src/assets/beach.jpg"
            alt="where is waldo image"
          />
          The beach
        </Link>
        <Link className="level-grid-item" to="map3">
          <img
            className="img-template"
            src="src/assets/blue.jpg"
            alt="where is waldo image"
          />
          The Blue
        </Link>
        <Link className="level-grid-item" to="map4">
          <img
            className="img-template"
            src="src/assets/maze.jpg"
            alt="where is waldo image"
          />
          The Maze
        </Link>
        <Link className="level-grid-item" to="map5">
          <img
            className="img-template"
            src="src/assets/snowMountain.jpg"
            alt="where is waldo image"
          />
          The White
        </Link>
        <Link className="level-grid-item" to="map6">
          <img
            className="img-template"
            src="src/assets/space.jpg"
            alt="where is waldo image"
          />
          The Space
        </Link>
      </div>
    </Layout>
  );
};
type GamePageProps = {
  title: string;
  imageUrl: string;
};

export const GamePage: FC<GamePageProps> = ({ title, records, imageUrl }) => {
  // pop-up need to be stick with the image instead of moving with the screen
  const [circleCoordinate, setCircleCoordinate] = useState<number[]>();
  const [isDisplay, setIsDisplay] = useState(false);
  const [boxCoordinate, setBoxCoordinate] = useState<number[]>();
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    // access coordinate

    console.log(` offset x = ${e.nativeEvent.offsetX}`);
    console.log(` offset y= ${e.nativeEvent.offsetY}`);

    // x is left; y is ..
    setCircleCoordinate([
      e.nativeEvent.offsetX - 10,
      e.nativeEvent.offsetY - 10,
    ]);
    setBoxCoordinate([e.nativeEvent.offsetX + 40, e.nativeEvent.offsetY - 80]);
    setIsDisplay((state) => !state);
  };
  console.log(boxCoordinate);
  return (
    <Layout title={title} haveRecord={true}>
      {' '}
      <div className="interact-container">
        {isDisplay && circleCoordinate ? (
          <div
            className="circle"
            style={{ left: circleCoordinate[0], top: circleCoordinate[1] }}
          ></div>
        ) : (
          <></>
        )}
        {isDisplay && boxCoordinate ? (
          <div
            className="box"
            style={{ left: boxCoordinate[0], top: boxCoordinate[1] }}
          >
            {' '}
            <button> waldo</button>
          </div>
        ) : (
          <></>
        )}
        <img
          src={imageUrl}
          alt={title}
          className=" w-100 interactImage "
          onClick={handleOnClick}
        />
      </div>
    </Layout>
  );
};

type ErrorPageProps = {};
export const ErrorPage: FC<ErrorPageProps> = ({}) => {
  return <div> error page.</div>;
};

type AppProp = {};
export default App;
// extracting game page to another file
