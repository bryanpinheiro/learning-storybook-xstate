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
   * What is the input's type?
   */
  type?: 'text' | 'password';
  /**
   * Is it required?
   */
  required?: boolean;
  /**
   * Which autocomplete option?
   */
  autoComplete?: 'off' | 'username' | 'email' | 'username email' |
  'current-password' | 'new-password';
  /**
   * Optional change handler
   */
  onChange?: () => void;
}

/**
 * Text field component for user interaction
 */
export const TextField = ({
  required = false,
  autoComplete = 'off',
  type = 'text',
  ...props
}: TextFieldProps) => {
  return (
    <input
      { ...props }
      required={ required }
      type={type}
      autoComplete={ autoComplete }
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      className={ [
        'storybook-textfield',
      ].join(' ') }
    />
  );
};
