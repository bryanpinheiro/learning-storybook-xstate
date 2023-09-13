'use client';

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from 'react';

const GoogleCallback = () => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));

    const accessToken = hashParams.get('access_token');
    const tokenType = hashParams.get('token_type');
    const expiresIn = hashParams.get('expires_in');
    const scope = hashParams.get('scope');

    if (accessToken) {
      // You can now use accessToken and other parameters as needed.
      console.log('Access Token:', accessToken);
      console.log('Token Type:', tokenType);
      console.log('Expires In:', expiresIn);
      console.log('Scope:', scope);
      fetchUserProfile(accessToken);
    } else {
      console.error('Google login failed.');
    }
  }, []);

  // Fetch user profile information using the access token
  const fetchUserProfile = async (accessToken: string) => {
    try {
      const personFields = 'names,emailAddresses,photos';

      const response = await fetch(
        `https://people.googleapis.com/v1/people/me?personFields=${personFields}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        console.log('User Profile:', userData);
      } else {
        console.error('Failed to fetch user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div>
      <Head>
        <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script>
      </Head>
      <div>
        {
          !user ? (
            <div>Logging in with Google...</div>
          ): (
            <div>
              <Image
                alt="Google Profile Picture"
                src={ user?.photos[0].url }
                width={ 300 }
                height={ 300 }
                priority />
              <h1>{ user?.names[0].displayName }</h1>
              <h2>{ user?.emailAddresses[0].value }</h2>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GoogleCallback;
