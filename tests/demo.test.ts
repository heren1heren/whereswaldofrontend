describe('initializing test ', () => {
  it('init', () => {
    expect(0).toBe(0);
  });
});
//* userevent
// describe("App component", () => {
//   it("renders magnificent monkeys", () => {
//     // since screen does not have the container property, we'll destructure render to obtain a container for this test
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });

//   it("renders radical rhinos after button click", async () => {
//     const user = userEvent.setup();

//     render(<App />);
//     const button = screen.getByRole("button", { name: "Click Me" });

//     await user.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });

//* render component
// import { Layout } from './Layout';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// describe('initilizing test', () => {
//   // render screen
//   // expect inside document
//   it('should work with title props ', () => {
//     render(
//       <MemoryRouter>
//         <Layout title={'test'}>hello</Layout>
//       </MemoryRouter>
//     ); //<MemoryRouter> should be used in order to test Link contained component
//     expect(screen.getByText('test')).toBeInTheDocument();
//     expect(screen).toMatchSnapshot();
//   });
//   // expect return ... with corresponding props
// });

//*snap shot
// describe('initilizing test', () => {
//   // render screen
//   // expect inside document
//   it('should work with title props ', () => {
//     const component = render(
//       <MemoryRouter>
//         <Layout title={'test'}>hello</Layout>
//       </MemoryRouter>
//     ); //<MemoryRouter> should be used in order to test Link contained component
//     expect(screen.getByText('test')).toBeInTheDocument();
//     expect(component).toMatchSnapshot();
//   });
//   // expect return ... with corresponding props
// });
