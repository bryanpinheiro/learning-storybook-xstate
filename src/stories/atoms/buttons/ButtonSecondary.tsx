import React from 'react';
import './buttonSecondary.css';

interface ButtonSecondaryProps {
  /**
   * Button ID
   */
  id: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button type
   */
  type: string;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Secondary Button component for user interaction
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
