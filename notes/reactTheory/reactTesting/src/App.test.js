
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';


test('renders with correct text', () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});



