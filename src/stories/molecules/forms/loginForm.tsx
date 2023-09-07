import React from 'react';

// import { ButtonPrimary } from '@/stories/atoms/buttons/ButtonPrimary';
// import { ButtonTerciary } from '@/stories/atoms/buttons/ButtonTerciary';
// import { FieldLabel } from '@/stories/atoms/fieldLabels/fieldLabel';
// import { TextField } from '@/stories/atoms/textFields/textField';
// import { HelpText } from '@/stories/atoms/helpTexts/helpText';
// import { InLineAlert } from '@/stories/atoms/inlineAlerts/inlineAlert';

import './loginForm.css';

interface LoginFormProps {
  /**
   * OnSubmit handler
   */
  onSubmit: () => void;
}

/**
 * Login form component for user interaction
 */
export const LoginForm = ({
  onSubmit,
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className='storybook-loginform'>
      {/* <ButtonTerciary label='Continue with Google' />
      <HelpText content='icon_label' text='indicates a required field.' />
      <InLineAlert
        variant='negative'
        title='Unable to log in'
        description={ 'Your login or password is incorrect.' +
        ' Please double-check your credentials and try again.' }
      />
      <FieldLabel
        htmlFor='username_email'
        label='Email or username'
        major='required'
        content='label_icon'
      />
      <TextField
        id='username_email'
        name='username_email'
        type='text'
        autoComplete='username email'
        ariaDescribedby='username_email_help'
        required
      />
      <HelpText
        id='username_email_help'
        variant='negative'
        text={
          'An email or username is required to log in.' + ' ' +
          'You can also log in with Google.'
        }
      />
      <FieldLabel
        htmlFor='password'
        label='Password'
        major='required'
        content='label_icon'
      />
      <TextField
        id='password'
        name='password'
        type='password'
        autoComplete='current-password'
        ariaDescribedby='password_help'
        required
      />
      <HelpText
        id='password_help'
        variant='negative'
        text='A password is required to log in.'
      />
      <ButtonPrimary label='Log in' /> */}
    </form>
  );
};
