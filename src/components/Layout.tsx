import { Link } from 'react-router-dom';
import { LayoutType } from '../typeDeclaration';

export const Layout = ({
  children,

  title = 'Where is waldo',
}: LayoutType) => {
  return (
    <div className=" d-flex  flex-column justify-content-between vh-100 text-center">
      <h1>{title}</h1>
      <nav className="nav justify-content-center  ">
        <Link to="/records" className="nav-link ">
          {' '}
          Record
        </Link>

        <Link to="/" className="nav-link ">
          {' '}
          Home Page
        </Link>
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
