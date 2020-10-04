import React from 'react';
import './assets/css/App.css';

import {
  auth,
} from './services/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import { ChatHeader } from './components/ChatHeader';
import { ChatRoom } from './components/ChatRoom';
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

export default App;
