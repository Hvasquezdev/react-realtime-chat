import React, { useState, useRef } from 'react';
import './assets/css/App.css';

import {
  auth,
  firebase,
  firestore,
} from './services/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Components
import { ArrowIcon } from './components/ArowIcon';
import { BaseButton } from './components/BaseButton';
import { ChatMessage } from './components/ChatMessage';
import { SignIn } from './components/SignIn';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <ChatHeader />

      <section className='main-wrapper'>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function ChatHeader() {
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
}

function SignOut() {
  return (
    auth.currentUser && (
      <BaseButton className='sign-out' onClick={() => auth.signOut()}>
        Sign Out
      </BaseButton>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [message, setMessage] = useState('');

  const updateScroll = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const text = message.trim();

    if (!text.length) {
      return;
    }

    const { uid, photoURL, email } = auth.currentUser;
    const photoPlaceholder = `https://avatars.dicebear.com/api/initials/${email.charAt(
      0
    )}.svg`;

    setMessage('');

    await messagesRef.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL: photoURL || photoPlaceholder,
    });
  };

  return (
    <>
      <div className='messages-list'>
        {messages &&
          messages.map((msg, i) => {
            const beforeMessageId = i > 0 && messages[i - 1].uid;

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

      <form className='chat-form' onSubmit={sendMessage}>
        <input
          value={message}
          placeholder='Type your message'
          onChange={(e) => setMessage(e.target.value)}
        />
        <BaseButton type='submit'>
          <ArrowIcon />
        </BaseButton>
      </form>
    </>
  );
}

export default App;
