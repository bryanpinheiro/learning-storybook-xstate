import React from 'react';
import './textField.css';

interface TextFieldProps {
  /**
   * What is the input's id?
   */
  id: string;
  /**
   * What is the input's name?
   */
  name: string;
  /**
   * Provide the id of the help text (Necessary if the field is required).
   */
  ariaDescribedby?: string;
  /**
   * Provide the aria-label for the input.
   */
  ariaLabel: string;
  /**
   * What is the input's type?
   */
  type?: 'text' | 'password';
  /**
   * Is it required?
   */
  required?: boolean;
  /**
   * Is it invalid?
   */
  invalid?: boolean;
  /**
   * Which autocomplete option?
   */
  autoComplete?: 'off' | 'username' | 'email' | 'username email' |
  'current-password' | 'new-password';
  /**
   * Optional change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional focus handler
   */
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional blur handler
   */
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Text field component for user interaction
 */
export const TextField = ({
  required = false,
  invalid = false,
  autoComplete = 'off',
  type = 'text',
  ariaLabel,
  ariaDescribedby,
  ...props
}: TextFieldProps) => {
  return (
    <input
      { ...props }
      type={ type }
      autoComplete={ autoComplete }
      aria-required={ required }
      aria-label={ ariaLabel }
      aria-invalid={ invalid }
      aria-describedby={ ariaDescribedby }
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      className={ [
        'storybook-textfield',
        invalid && 'invalid',
      ].join(' ') }
    />
  );
};
