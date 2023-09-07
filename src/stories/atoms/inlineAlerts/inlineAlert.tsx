import React from 'react';
import Image from 'next/image';
import './inlineAlert.css';

interface InLineAlertProps {
  /**
   * Which variant?
   */
  variant?: 'neutral' | 'informative' | 'negative';
  /**
   * Alert title
   */
  title: string;
  /**
   * Alert description
   */
  description: string;
}

/**
 * In-line Alert component for user interaction
 */
export const InLineAlert = ({
  variant = 'neutral',
  title,
  description,
  ...props
}: InLineAlertProps) => {
  const mode = `storybook-inline-alert--${ variant }`;

  const renderIcon = () => {
    if (variant !== 'neutral') {
      const iconName = variant === 'informative' ? 'info' : 'negative';

      return (
        <Image
          src={ `/images/${ iconName }-icon.svg` }
          alt={ `${variant} alert` }
          width={ 18 }
          height={ 18 }
        />
      )
    } else {
      return null;
    }
  }

  return (
    <div
      {...props}
      className={ [
        'storybook-inline-alert',
        mode
      ].join(' ') }
    >
      <header>
        <p className='title'>{ title }</p>
        {
          renderIcon()
        }
      </header>
      <main>
        <p className='description'>{ description }</p>
      </main>      
    </div>
  );
};
