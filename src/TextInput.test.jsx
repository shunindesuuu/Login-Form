/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';
import TextInput from './components/TextInput';
describe('TextInput', () => {
    it('should render the TextInput', () => {
        render(<TextInput />);
        const textinput = screen.getByRole("textbox");
        expect(textinput).toBeInTheDocument();
    });
    it('should be able to type', () => {
        render(<TextInput/>);
        const textinput = screen.getByRole("textbox")
        expect(textinput).toBeEnabled()
    });
    it('should render the label', () => {
        render(<TextInput/>);
        const textLabel = screen.getByText("Username")
        const textLabel2 = screen.getByText("Password")
        expect(textLabel).toBeInTheDocument()
        expect(textLabel2).toBeInTheDocument()
    })  
});