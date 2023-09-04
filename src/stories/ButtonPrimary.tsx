import React from 'react';
import './buttonPrimary.css';

interface ButtonPrimaryProps {
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonPrimary = ({
  disabled = false,
  size = 'medium',
  label,
  ...props
}: ButtonPrimaryProps) => {
  const mode = `storybook-button-primary--${disabled ? 'off' : 'on'}`;
  return (
    <button
      {...props}
      type="button"
      className={ [
        'storybook-button-primary',
        `storybook-button-primary--${ size }`,
        mode
      ].join(' ') }
    >
      {label}
    </button>
  );
};
