import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('incrémente le compteur quand on clique', () => {
    render(<Counter />)
    const button = screen.getByText('+1')
    fireEvent.click(button)
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()
})
