import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './redux/CounterContainer';
import LightContainer from './redux/LightComponent';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <LightContainer />
    </div>
  );
}

export default App;
