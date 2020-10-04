import React from 'react';
import { firestore } from '../services/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { ChatMessages } from './ChatMessages';
import { ChatMessagesForm } from './ChatMessagesForm';


export const ChatRoom = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  console.log(messages)

  return (
    <>
      <ChatMessages messages={messages} />
      <ChatMessagesForm messagesRef={messagesRef} />
    </>
  );
}