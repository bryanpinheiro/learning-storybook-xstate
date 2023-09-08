import React from 'react';

import { ButtonPrimary } from '@/stories/atoms/buttons/ButtonPrimary';
import { ButtonTerciary } from '@/stories/atoms/buttons/ButtonTerciary';
import { FieldLabel } from '@/stories/atoms/fieldLabels/fieldLabel';
import { TextField } from '@/stories/atoms/textFields/textField';
import { HelpText } from '@/stories/atoms/helpTexts/helpText';
import { InLineAlert } from '@/stories/atoms/inlineAlerts/inlineAlert';

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
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // You can access form elements and their values using event.currentTarget
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Do something with the form data (e.g., send it to a server, perform validation)
    // Example: Display the form data in the console
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }

    // You can also perform other actions or state updates here

    // Optionally, you can use the reset() method to clear the form fields
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className='storybook-loginform' noValidate>
      <ButtonTerciary
        id='google_authentication_button'
        type='button'
        label='Continue with Google'
      />
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
        ariaLabel='Email or username'
        type='text'
        autoComplete='username email'
        ariaDescribedby='username_email_help'
        required={ true }
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
        ariaLabel='Password'
        type='password'
        autoComplete='current-password'
        ariaDescribedby='password_help'
        required={ true }
      />
      <HelpText
        id='password_help'
        variant='negative'
        text='A password is required to log in.'
      />
      <ButtonPrimary
        id='login_button'
        type='submit'
        major='disabled'
        size='large'
        label='Log in'
      />
    </form>
  );
};
