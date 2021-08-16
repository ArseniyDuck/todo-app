import React from 'react';
import { CheckMarkSvg, ListSvg, CrossSvg } from './Icons';


type PropsType = {
   selectedAction: 'complete' | 'delete' | null
   deleteSelected: () => void
   completeSelected: () => void
};

export const TodoActions: React.FC<PropsType> = (props) => {
   const selectedMode = ' actions__action_selected';
   let deleteButtonClassName = 'actions__action actions__action_delete';
   let completeButtonClassName = 'actions__action actions__action_complete';
   switch (props.selectedAction) {
      case 'delete':
         deleteButtonClassName += selectedMode;
         break;
      case 'complete':
         completeButtonClassName += selectedMode;
         break;
   }

   return (
      <div className='app__actions actions'>
         <button className='actions__action actions__action_list'><ListSvg /></button>
         <button onClick={props.deleteSelected} className={deleteButtonClassName}>
            <CrossSvg color='red' />
         </button>
         <button onClick={props.completeSelected} className={completeButtonClassName}>
            <CheckMarkSvg height='20px' />
         </button>
      </div>
   );
};