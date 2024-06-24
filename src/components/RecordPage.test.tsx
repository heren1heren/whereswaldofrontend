import { render, screen } from '@testing-library/react';
import { Record } from './RecordPage';
import { MemoryRouter } from 'react-router-dom';
describe('initializing record page ', () => {
  // mock data from back end
  it('init', () => {
    const component = render(
      <MemoryRouter>
        <Record />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
  // expect fetching correctly from backend
  // expect data to be display correctly
});
