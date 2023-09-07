import React from 'react';
import './login.css';

interface LoginProps {
  /**
   * How large should the template be?
   */
  size: 'default' | 'large' | 'small';
}

/**
 * Initial Wireframe for Login Page
 */
export const Login = ({
  size = 'default',
  ...props
}: LoginProps) => {
  return (
    <main className='storybook-login'>
      <div className='storybook-login--form x-div'></div>
    </main>
  );
};
