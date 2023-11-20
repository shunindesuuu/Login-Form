/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {render, screen, fireEvent} from '@testing-library/react'
import App from '../src/App'
import { describe, expect, it } from 'vitest';

describe('App', () => {
    it('should render the App', () => {
      render(<App />);
      const usernameText = screen.getByText("Username");
      expect(usernameText).toBeInTheDocument();
    });
    it('should enable the button if two textboxes were typed', () => {
      render(<App />);
      const usernameInput = screen.getByLabelText('Username');
      const passwordInput = screen.getByLabelText('Password');
      const button = screen.getByText('Login');

      // Initially, the button should be disabled
      expect(button).toBeDisabled();

      // Type into the username input
      fireEvent.change(usernameInput, { target: { value: 'test' } });

      // Now, the button should still be disabled
      expect(button).toBeDisabled();

      // Type into the password input
      fireEvent.change(passwordInput, { target: { value: 'test' } });

      // Now, the button should be enabled
      expect(button).not.toBeDisabled();
  });
  });