import { render, screen } from "@testing-library/react"
import { Hello } from "./Hello"

it('Renders "Hello World', () => {
  render(<Hello/>)
  const helloElement = screen.getByText(/Hello World/i)
  expect(helloElement).toBeInTheDocument()
})