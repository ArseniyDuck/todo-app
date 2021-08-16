export const initialState = {
   todoList: [] as TTodoList,
   selectedTodoId: null as TSelectedTodo,
   selectedAction: null as TSelectedAction,
   disableSelection: false as boolean,
};


export const reducer = (state: TInitialState, action: TAction) => {
   switch (action.type) {
      case 'CREATE_TODO':
         return {
            ...state,
            todoList: [...state.todoList, {
               id: state.todoList.length ? state.todoList[state.todoList.length - 1].id + 1 : 0,
               text: action.text,
               isCompleted: false,
            }]
         };
      case 'DELETE':
         return {
            ...state,
            todoList: state.todoList.filter(elem => elem.id !== state.selectedTodoId),
            selectedAction: null,
            selectedTodoId: null,
         };
      case 'COMPLETE':
         return {
            ...state,
            todoList: state.todoList.map(elem => {
               if (elem.id === state.selectedTodoId) {
                  return {
                     ...elem,
                     isCompleted: true,
                  };
               } else {
                  return elem;
               }
            }),
         };
      case 'SELECT_ACTION':
         return {
            ...state,
            selectedAction: action.action,
         };
      case 'SELECT_TODO':
         return {
            ...state,
            selectedTodoId: action.id
         };
      case 'ARROW_DOWN':
         if (!state.disableSelection) {
            let id = state.selectedTodoId === null ? state.todoList[0].id : state.selectedTodoId;
            const index = state.todoList.indexOf(state.todoList.filter(elem => elem.id === state.selectedTodoId)[0]);
            if (index !== state.todoList.length - 1) {
               id = state.todoList[index + 1].id;
            }
            return {
               ...state,
               selectedTodoId: id
            }
         } return state;
      case 'ARROW_UP':
         if (!state.disableSelection) {
            let id = state.selectedTodoId === null ? state.todoList[0].id : state.selectedTodoId;
            const index = state.todoList.indexOf(state.todoList.filter(elem => elem.id === state.selectedTodoId)[0]);
            if (index > 0) {
               id = state.todoList[index - 1].id;
            }
            return {
               ...state,
               selectedTodoId: id
            };
         } return state;
      case 'TOGGLE_DISABLE':
         return {
            ...state,
            disableSelection: action.state
         };
      default:
         return state;
   }
};

// actions creators:
export const actions = {
   createTodo: (text: string) => ({ type: 'CREATE_TODO', text } as const),
   deleteTodo: () => ({ type: 'DELETE' } as const),   
   completeTodo: () => ({ type: 'COMPLETE' } as const),
   selectAction: (action: TSelectedAction) => ({ type: 'SELECT_ACTION', action } as const),
   selectTodo: (id: TSelectedTodo) => ({ type: 'SELECT_TODO', id } as const),
   arrowDown: () => ({ type: 'ARROW_DOWN' } as const),
   arrowUp: () => ({ type: 'ARROW_UP' } as const),
   toggleDisable: (state: boolean) => ({ type: 'TOGGLE_DISABLE', state } as const),
};


// types:
type TSelectedTodo = number | null;

type TSelectedAction = 'complete' | 'delete' | null;

type TTodo = {
   id: number
   text: string
   isCompleted: boolean
};

export type TTodoList = Array<TTodo>;

type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

type TAction = InferActionsType<typeof actions>;

type TInitialState = typeof initialState;
