import React from 'react';
import { firebase, auth } from '../services/firebase';

import { BaseButton } from './BaseButton';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <BaseButton onClick={signInWithGoogle}>Sign in with Google</BaseButton>
  );
};
