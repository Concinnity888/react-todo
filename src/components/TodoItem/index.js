import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/todoSlice';

import style from './style.module.css';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({
      id,
      completed: !completed
    }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className={ `${style.listItem} ${completed && style.listItem_completed} `}>
      <input type='checkbox' checked={completed} id={id} onChange={handleCompleteClick}></input>
      <label for={id}>{title}</label>
      <button className={ `${ style.listItemBtn } btn btn_small` } onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
