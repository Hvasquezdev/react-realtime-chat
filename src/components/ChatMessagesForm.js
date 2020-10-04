import React, { useState } from 'react';
import { auth, firebase } from '../services/firebase';

import { ArrowIcon } from './ArowIcon';
import { BaseButton } from './BaseButton';

export const ChatMessagesForm = (props) => {
  const [message, setMessage] = useState('');

  const getPhotoUrl = () => {
    const { photoURL, email } = auth.currentUser;
    const photoPlaceholder = `https://avatars.dicebear.com/api/initials/${email.charAt(
      0
    )}.svg`;

    return photoURL || photoPlaceholder;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const text = message.trim();

    if (!text.length) {
      return;
    }

    const { uid } = auth.currentUser;
    const photoURL = getPhotoUrl();

    setMessage('');

    await props.messagesRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <form className='chat-form' onSubmit={onSubmit}>
      <input
        value={message}
        placeholder='Type your message'
        onChange={(e) => setMessage(e.target.value)}
      />
      <BaseButton type='submit'>
        <ArrowIcon />
      </BaseButton>
    </form>
  );
};
