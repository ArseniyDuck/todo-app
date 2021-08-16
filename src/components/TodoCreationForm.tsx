import React, { useState } from 'react';
import { CrossSvg } from './Icons';


type PropsType = {
   createTodo: (text: string) => void
   inputOnFocus: () => void
   inputOnBlur: () => void
};

export const TodoCreationForm: React.FC<PropsType> = ({ createTodo, inputOnFocus, inputOnBlur }) => {
   const [newTodoText, updateNewTodoText] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateNewTodoText(e.target.value);
   };

   const handleSubmit = (e: React.SyntheticEvent) => {
      if (newTodoText) {
         createTodo(newTodoText);
         updateNewTodoText('');
      }
      e.preventDefault();
   };

   return (
      <form className='app__form form' onSubmit={handleSubmit}>
         <input value={newTodoText} onChange={handleChange} onFocus={inputOnFocus} onBlur={inputOnBlur} type='text' className='form__input' />
         <button type='submit' className='form__button'><CrossSvg color='white' /></button>
      </form>
   );
};