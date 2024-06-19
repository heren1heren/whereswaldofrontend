import { render, screen } from '@testing-library/react';
import App from '../router-template';
// need to put the component inside a router to test it
import { MemoryRouter } from 'react-router-dom';
describe('initializing home page test ', () => {
  it('init', () => {
    const component = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
    // get all links
    console.log(screen.getAllByRole('link'));
    expect(screen.getAllByRole('link')).toHaveLength(9);
    // get 6 links inside main page
    // const Main = screen.getBy //
    //*userevent inside the home page component
  });
});
