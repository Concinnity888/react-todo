import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import BtnRemoveAll from './components/BtnRemoveAll';

const App = () => {
  return (
    <div className='app'>
      <h1>Список задач</h1>

      <div className="wrapper">
        <Form />
        <TodoList />
        <BtnRemoveAll />
      </div>
    </div>
  );
};

export default App;
