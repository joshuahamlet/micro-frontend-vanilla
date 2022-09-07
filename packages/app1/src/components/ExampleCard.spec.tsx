import { render, screen } from "@testing-library/react"
import ExampleCard from "./ExampleCard"

describe('Example Card', () => {
  it('renders', async ()=> {
    render(<ExampleCard/>)
    expect( await screen.findByText(/Book classic tour/)).toBeInTheDocument()
  })
})