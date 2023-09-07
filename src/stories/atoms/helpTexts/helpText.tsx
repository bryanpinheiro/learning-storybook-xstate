import React from 'react';
import Image from 'next/image';
import './helpText.css';

interface HelpTextProps {
  /**
   * What is the Help text id?
   */
  id?: string;
  /**
   * Which variant?
   */
  variant?: 'neutral' | 'negative';
  /**
   * Which content variant?
   */
  content?: 'label_only' | 'icon_label';
  /**
   * Help text contents
   */
  text: string;
}

/**
 * Help text component for user interaction
 */
export const HelpText = ({
  variant = 'neutral',
  content = 'label_only',
  text,
}: HelpTextProps) => {

  const variantMode = variant === 'negative' ?
  'storybook-helptext--negative'
    : '';
  
  return (
    <div
      className={ [
        'storybook-helptext',
        variantMode,
      ].join(' ') }
    >
      {
        content === 'icon_label' ? (
          <>
            <Image
              src="/images/asterisk.svg"
              alt="required"
              width={ 8 }
              height={ 8 }
            />
            <span>{ text }</span>
          </>
        ) : (
          <span>{ text }</span>
        )
      }
    </div>
  );
};
