import React, { useReducer, useEffect } from 'react';
import './styles/styles.css';
import { initialState, reducer, actions } from './app-reducer';
import { TodosContainer } from './components/TodosContainer';
import { TodoCreationForm } from './components/TodoCreationForm';
import { TodoActions } from './components/TodoActions';


const App: React.FC = () => {
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      document.addEventListener('keydown', onKeyDown);

      return () => {
         document.removeEventListener('keydown', onKeyDown);
      };
   });

   const onKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
         case 'ArrowDown':
            dispatch(actions.arrowDown());
            break;
         case 'ArrowUp':
            dispatch(actions.arrowUp());
            break;
         case 'ArrowLeft':
            dispatch(actions.selectAction('delete'));
            break;
         case 'ArrowRight':
            dispatch(actions.selectAction('complete'));
            break;
         case 'Enter':
            executeSelectedAction();
            break;
      }
   };

   const createNewTodo = (text: string) => {
      dispatch(actions.createTodo(text));
   };

   const select = (id: number | null) => {
      dispatch(actions.selectTodo(id));
   };

   const executeSelectedAction = () => {
      if (state.selectedTodoId !== null && state.selectedAction !== null) {
         if (state.selectedAction === 'delete') {
            deleteSelected();
         } else if (state.selectedAction === 'complete') {
            completeSelected();
         }
      }
   };

   const completeSelected = () => {
      dispatch(actions.completeTodo());
   };

   const deleteSelected = () => {
      dispatch(actions.deleteTodo());
   };

   const inputOnFocus = () => {
      dispatch(actions.selectTodo(null));
      dispatch(actions.selectAction(null));

      dispatch(actions.toggleDisable(true));
   };

   const inputOnBlur = () => {
      dispatch(actions.toggleDisable(false));
   };

   return (
      <div className='app'>
         <h1 className='app__heading'>Todos</h1>
         <TodosContainer todos={state.todoList} selectedTodoId={state.selectedTodoId} selectTodo={select} />
         <TodoCreationForm createTodo={createNewTodo} inputOnFocus={inputOnFocus} inputOnBlur={inputOnBlur} />
         <TodoActions completeSelected={completeSelected} deleteSelected={deleteSelected} selectedAction={state.selectedAction} />
      </div>
   );
};


export default App;