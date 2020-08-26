import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //   BEM (Block Element Modifier) naming convention
    <div className="app">
        <div className="app_body">
            {/* Sidebar */}
            <Sidebar/>
            {/* Chat */}
            <Chat/>
        </div>
    </div>
  );
}

export default App;
