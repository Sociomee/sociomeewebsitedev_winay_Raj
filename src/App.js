import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Root from './Root';
import UserContext from './Context/userContext';
import { useState } from 'react';

function App() {
  const [userProfile, setUserProfile] = useState('Hii');
  return (
    <UserContext.Provider value={[userProfile, setUserProfile]}>
      <Root>
      </Root>
    </UserContext.Provider>
  );
}

export default App;
