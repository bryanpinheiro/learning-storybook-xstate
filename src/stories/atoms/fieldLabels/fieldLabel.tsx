import React from 'react';
import Image from 'next/image';
import './fieldLabel.css';

interface FieldLabelProps {
  /**
   * What is the input id?
   */
  htmlFor: string;
  /**
   * What is the major variant?
   */
  major?: 'neutral' | 'required';
  /**
   * Which content variant?
   */
  content?: 'label_only' | 'label_text' | 'label_icon';
  /**
   * Label contents
   */
  label: string;
}

/**
 * Field label component for user interaction
 */
export const FieldLabel = ({
  major = 'neutral',
  content = 'label_only',
  label,
  ...props
}: FieldLabelProps) => {

  const contentMode = content === 'label_text' ?
    'storybook-fieldlabel--content-label-text'
    : '';

  const renderLabel = (major: string) => {
    if (major === 'required') {
      switch (content) {
        case 'label_text':
          return (
            <>
              <span>{ label }</span>
              <span className="required">Required</span>
            </>
          );
        default:
          return (
            <>
              <span>{ label }</span>
              <Image
                src="/images/asterisk.svg"
                alt="required"
                width={ 8 }
                height={ 8 } />
            </>
          );
      }
    } else {
      switch (content) {
        case 'label_text':
          return (
            <>
              <span>{ label }</span>
              <span className="optional">- Optional</span>
            </>
          );
        default:
          return (
            <span>{ label }</span>
          );
      }
    }
  }

  return (
    <label { ...props }
    className={ [
      'storybook-fieldlabel',
      contentMode,
      ].join(' ') }>
      { renderLabel(major) }
    </label>
  );
};
