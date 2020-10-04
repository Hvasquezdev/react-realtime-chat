import React, { useRef } from 'react';
import { auth } from '../services/firebase';

import { ChatMessage } from './ChatMessage';

export const ChatMessages = (props) => {
  const dummy = useRef();

  const updateScroll = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='messages-list'>
      {props.messages &&
        props.messages.map((msg, i) => {
          const beforeMessageId = i > 0 && props.messages[i - 1].uid;

          return (
            <ChatMessage
              key={msg.id}
              message={msg}
              before={beforeMessageId}
              user={auth.currentUser}
              updateScroll={updateScroll}
            />
          );
        })}

      <div ref={dummy} />
    </div>
  );
};
