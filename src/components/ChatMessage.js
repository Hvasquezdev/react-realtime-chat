import React from 'react';
import '../assets/css/ChatMessage.css';

export const ChatMessage = props => {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === props.user.uid ? 'sent' : 'received';
  const isSameOwner = props.before === uid ? 'same-owner' : '';

  return (
    <div className={`chat-message ${messageClass} ${isSameOwner}`}>
      <img
        className='user-thumb'
        src={photoURL}
        alt={text}
        width='36'
        height='36'
      />
      <p className='message-text'>{text}</p>
    </div>
  );
}