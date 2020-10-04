import React from 'react';
import { auth } from '../services/firebase';

import { SignOut } from './SignOut';

export const ChatHeader = () => {
  const getUserPhoto = () => {
    const { photoURL, email } = auth.currentUser;
    const photoPlaceholder = `https://avatars.dicebear.com/api/initials/${email.charAt(
      0
    )}.svg`;

    return photoURL || photoPlaceholder;
  };

  const isSignedIn = auth.currentUser !== null;

  return (
    <header className='chat-header'>
      {isSignedIn ? (
        <div className='user-wrapper'>
          <img
            className='user-thumb'
            src={getUserPhoto()}
            alt={auth.currentUser.email}
            width='55'
            height='55'
          />

          <div className='user-info'>
            <h2 className='user-name'>
              {auth.currentUser.displayName || 'Unknown'}
            </h2>
            <span className='user-status'>{auth.currentUser.email}</span>
          </div>
        </div>
      ) : (
        <h1>Sign in to start the chat room</h1>
      )}

      <SignOut />
    </header>
  );
};
