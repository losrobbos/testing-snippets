import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('rendering of a headline', () => {

  render(<App />) // renders JSX component to DOM => on that we can do some EXPECTATIONS

  // the screen object gives us access to the DOM
  let h1 = screen.queryByText("DOM Testing") // check the dom for an element with this text

  // expect the h1 tag to be present in the DOM
  expect(h1).toBeTruthy()
});

// test simulating a DOM event (=> e.g. a user click on a button)
test('if a click causes DOM change', () => {

  render(<App />)

  // check that secret p is not in DOM so far...
  let pSecret = screen.queryByText("!YOU EXPOSED ME!") // returns "null" if not found
  expect(pSecret).toBeNull()

  // grab the button to click
  let button = screen.getByText("Show secret")
  expect(button).toBeDefined()
  
  // simulate a click on the button
  fireEvent.click(button)

  // check if p arises in the DOM
  pSecret = screen.queryByText("!YOU EXPOSED ME!")
  expect(pSecret).toBeTruthy() // should be visible now!
})
