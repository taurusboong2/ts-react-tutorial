import React from 'react';
import './App.css';
import Counter from './Counter';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
      <ReducerSample />
    </div>
  );
};

export default App;
