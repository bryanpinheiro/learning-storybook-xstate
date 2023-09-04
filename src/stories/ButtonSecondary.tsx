import React from 'react';
import './buttonSecondary.css';

interface ButtonSecondaryProps {
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
 * Secondary UI component for user interaction
 */
export const ButtonSecondary = ({
  disabled = false,
  size = 'medium',
  label,
  ...props
}: ButtonSecondaryProps) => {
  const mode = `storybook-button-secondary--${disabled ? 'off' : 'on'}`;
  return (
    <button
      {...props}
      type="button"
      className={ [
        'storybook-button-secondary',
        `storybook-button-secondary--${ size }`,
        mode
      ].join(' ') }
    >
      {label}
    </button>
  );
};
