import React from 'react';
import { CheckMarkSvg } from './Icons';


type PropsType = {
   text: string
   isSelected: boolean
   isCompleted: boolean
   select: () => void
};

export const TodosItem: React.FC<PropsType> = (props) => {
   const todoClassName = props.isSelected ? 'todos__item todos__item_selected': 'todos__item';
   const todoTextClassName = props.isCompleted ? 'todos__text todos__text_completed': 'todos__text';
   
   return (
      <div className={todoClassName} onClick={props.select}>
         <p className={todoTextClassName}>{props.text}</p>
         { props.isCompleted && <CheckMarkSvg height='17.5px' /> }
      </div>
   );
};