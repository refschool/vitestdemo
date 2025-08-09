import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('affiche le nom passé en prop', () => {
    render(<Hello name="Yvon" />)
    expect(screen.getByText(/Hello Yvon!/i)).toBeInTheDocument()
})