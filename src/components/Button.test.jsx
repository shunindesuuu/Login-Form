/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('should render the button', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    it('should render the Disabled Button', () => {
        render(<Button disabled={true} />);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });
    it('should render the text inside the button correctly', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Login");
    });
    it('should be clicked', () => {
        const fn = vi.fn();
        render(<Button handleLogin={fn} isFormValid={true} />);
        fireEvent.click(screen.getByRole("button"));
        expect(fn).toHaveBeenCalled();
    });
});