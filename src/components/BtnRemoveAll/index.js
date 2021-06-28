import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAll } from '../../redux/todoSlice';

const BtnRemoveAll = () => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodoAll());
  };

  return (
    <button className='btn' onClick={handleDeleteClick}>Удалить все</button>
  );
};

export default BtnRemoveAll;
