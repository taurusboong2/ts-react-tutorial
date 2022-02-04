import React from 'react';
import './App.css';
import Counter from './Counter';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
    </div>
  );
};

export default App;
