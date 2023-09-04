import React from 'react';
import Image from 'next/image';

import './buttonTerciary.css';

interface ButtonTerciaryProps {
  /**
   * Is the action loading?
   */
  loading?: boolean;
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
 * Terciary UI component for user interaction
 */
export const ButtonTerciary = ({
  loading = false,
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
