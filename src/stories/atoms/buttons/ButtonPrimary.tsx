import React from 'react';
import './buttonPrimary.css';

interface ButtonPrimaryProps {
  /**
   * What is the major variant?
   */
  major?: 'neutral' | 'disabled';
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
 * Primary Button component for user interaction
 */
export const ButtonPrimary = ({
  major = 'neutral',
  size = 'medium',
  label,
  ...props
}: ButtonPrimaryProps) => {
  const mode = `storybook-button-primary--${ major }`;
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
