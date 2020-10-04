import React from 'react';
import '../assets/css/ChatHeader.css';
import { auth } from '../services/firebase';

import { UserWrapper } from './UserWrapper';
import { SignOut } from './SignOut';

export const ChatHeader = () => {
  const isSignedIn = auth.currentUser !== null;

  return (
    <header className='chat-header'>
      {isSignedIn ? (
        <UserWrapper user={auth.currentUser} />
      ) : (
        <h1>Sign in to start the chat room</h1>
      )}

      <SignOut />
    </header>
  );
};
