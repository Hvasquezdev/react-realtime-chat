import React from 'react';
import { auth } from '../services/firebase';

import { BaseButton } from './BaseButton';

export const SignOut = () => {
  return (
    auth.currentUser && (
      <BaseButton className='sign-out' onClick={() => auth.signOut()}>
        Sign Out
      </BaseButton>
    )
  );
};
