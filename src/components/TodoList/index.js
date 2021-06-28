import React from 'react';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';

import style from './style.module.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className={ style.list }>
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
