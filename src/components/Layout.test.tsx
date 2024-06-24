import { Layout } from './Layout';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
describe('initilizing test', () => {
  // render screen
  // expect inside document
  it('should work with title props ', () => {
    const component = render(
      <MemoryRouter>
        <Layout title={'test'}>hello</Layout>
      </MemoryRouter>
    ); //<MemoryRouter> should be used in order to test Link contained component
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
  // expect return ... with corresponding props
});
