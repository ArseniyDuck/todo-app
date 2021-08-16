import React from 'react';
import { TTodoList } from '../app-reducer';
import { TodosItem } from './TodosItem';


type PropsType = {
   todos: TTodoList
   selectedTodoId: number | null
   selectTodo: (id: number | null) => void
};

export const TodosContainer: React.FC<PropsType> = (props) => {
   return (
      <div className='app__container todos'>
         {props.todos.map(elem => {
            const isSelected = props.selectedTodoId === elem.id;
            const selectCurrentTodo = () => {
               props.selectTodo(elem.id);
            };

            return <TodosItem key={elem.id}
                     text={elem.text}
                     isCompleted={elem.isCompleted}
                     isSelected={isSelected}
                     select={selectCurrentTodo} />
         })}
      </div>
   );
};