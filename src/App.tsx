import React from 'react';
import './App.css';
import Greetings from './Greetings';

const App: React.FC = () => {
  return (
    <div className="App">
      <Greetings name="Hello" />
    </div>
  );
};

export default App;
