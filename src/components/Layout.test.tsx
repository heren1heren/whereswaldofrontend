import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import { vi } from 'vitest';
import { Layout } from './Layout';

describe('props Test', () => {
  it('should work with title props ', () => {
    const component = render(
      <MemoryRouter>
        <Layout title={'test'}>hello</Layout>
      </MemoryRouter>
    ); //<MemoryRouter> should be used in order to test Link contained component
    expect(screen.getByText('test')).toBeInTheDocument();
    // layout has 3 links
    expect(component.getAllByRole('link')).toHaveLength(3);
    expect(component).toMatchSnapshot();
  });

  it(' should render children ', () => {
    // mock component
    const MockCom = () => {
      return <div></div>;
    };
    const component = render(
      <MemoryRouter>
        <Layout title={'test'}>
          <MockCom />
        </Layout>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Links test ', () => {
  const user = userEvent.setup();
  const history = createMemoryHistory();

  history.push = vi.fn();

  it(' recordLink ', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <Layout title="hello">hello</Layout>
      </Router>
    );

    const Link = screen.getByRole('link', { name: /Record/ });
    expect(Link).toBeInTheDocument();
    await user.click(Link);
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/records',
        search: '',
      },
      undefined,
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined,
      }
    );
  });
  it(' home Page Link ', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <Layout title="hello">hello</Layout>
      </Router>
    );

    const Link = screen.getByText('Home Page');
    expect(Link).toBeInTheDocument();
    await user.click(Link);
    expect(history.push).toHaveBeenCalled();
  });
  it(' github link ', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <Layout title="hello">hello</Layout>
      </Router>
    );

    expect(screen.getByText('Cookie Turtle').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/heren1heren/whereswaldofrontend'
    );
  });
});
