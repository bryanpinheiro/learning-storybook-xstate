import React from 'react';
import ReactLink from 'next/link';
import './link.css';

interface LinkProps {
  /**
   * Text to display on the link
   */
  text: string;
  /**
   * URL to link to
   */
  url: string | object;
  /**
   * Target of the link
   */
  target?: string;
  /**
   * Is the link outside of the site
   */
  outside?: boolean;
  /**
   * Should replace the browser history stack?
   */
  replace?: boolean;
}

/**
 * Link component for user interaction
 */
export const Link = ({
  text,
  url,
  outside = false,
  ...props
}: LinkProps) => {
  return (
    <>
      {
        outside ? (
          <a href={ typeof url === 'string' ? url : '#' }
            target='_blank'
            rel='noopener noreferrer'
            className='storybook-link'>
            {text}
          </a>
        ) : (
          <ReactLink
            {...props}
            href={url}
            className='storybook-link'>
            {text}
          </ReactLink>
        )
      }
    </>
  );
};
