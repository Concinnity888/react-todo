import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

import style from './style.module.css';

const Form = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const title = value;

    if (title) {
      dispatch(addTodo({
        title: value
      }));
      setValue('');
    }
  };

  return (
    <form onSubmit={onSubmit} className={ style.form }>
      <input
        type='text'
        className={ style.formField }
        placeholder='Введите текст задачи...'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type='submit' className={ `${ style.formBtn } btn btn_small` }>
        Добавить
      </button>
    </form>
  );
};

export default Form;
