import React from 'react';
import Image from 'next/image';

import './buttonTerciary.css';

interface ButtonTerciaryProps {
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
   * Is the action loading?
   */
  loading?: boolean;
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
 * Terciary Button component for user interaction
 */
export const ButtonTerciary = ({
  loading = false,
  fullwidth = true,
  label,
  ...props
}: ButtonTerciaryProps) => {
  return (
    <button
      {...props}
      type="button"
      className={ [
        'storybook-button-terciary',
        loading && 'storybook-button-terciary--loading',
        fullwidth && 'fullwidth',
      ].join(' ') }
    >
      <Image
        className='storybook-button-terciary-icon'
        src="/images/google-icon.svg"
        alt="Google Icon"
        width={24}
        height={24}
      />
      <span className='storybook-button-terciary-label'>
        {label}
      </span>
    </button>
  );
};
