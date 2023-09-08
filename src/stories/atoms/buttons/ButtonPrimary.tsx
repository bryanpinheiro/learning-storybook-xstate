import React from 'react';
import './buttonPrimary.css';

interface ButtonPrimaryProps {
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
  type: 'button' | 'submit' | 'reset' | undefined;
  /**
   * What is the major variant?
   */
  major?: 'neutral' | 'disabled';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Sets button to full width
   */
  fullwidth?: boolean;
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
  fullwidth = true,
  label,
  onClick,
  ...props
}: ButtonPrimaryProps) => {
  const mode = `storybook-button-primary--${ major }`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (major !== 'disabled') {
      if(onClick) {
        onClick();
      }
    } else {
       // Prevent the default action (e.g., form submission or link navigation)
      event.preventDefault(); 
    }
  };

  return (
    <button
      { ...props }
      onClick={ handleClick }
      aria-disabled={ major === 'disabled' }
      className={ [
        'storybook-button-primary',
        `storybook-button-primary--${ size }`,
        fullwidth && 'fullwidth',
        mode
      ].join(' ') }
    >
      {label}
    </button>
  );
};
