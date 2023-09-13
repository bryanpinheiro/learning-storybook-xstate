'use client';

import { LoginForm } from "@/stories/molecules/forms/loginForm";

export default function Login() {

  function handleGoogleLogin() {
    const clientId = '124600712509-tmh7bikjjitonmd6gvtctat3n9nlvfoe.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/auth/google/callback';
    const authUri = 'https://accounts.google.com/o/oauth2/auth';

    const authURL = authUri + "?client_id=" + clientId +
      "&response_type=token" +
      "&scope=profile email" +
      "&redirect_uri=" +
      encodeURIComponent(redirectUri);
    
    window.location.href = authURL;
  };

  return (
    <main>
      <LoginForm
        onSubmit={ (data: any) => {
          alert(JSON.stringify(data, null, 2));
        } }
        onGoogleAuthClick={handleGoogleLogin}
      />
    </main>
  )
}
