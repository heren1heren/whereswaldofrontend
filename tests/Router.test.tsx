import { render, screen } from '@testing-library/react';
import App from '../src/router-template';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
describe('App component', () => {
  it('renders app component and error page after click unavailable link', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByRole('link', { name: 'Profile page' }); // react link is not recognized
    expect(link).toBeInTheDocument();
    await user.click(link); // it doesn't trigger error page
  });
});
