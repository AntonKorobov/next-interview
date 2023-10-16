interface IAction {
  type: 'add' | 'delete' | 'changeInput';
  payload: { name: string };
}

interface IToDo {
  name: string;
}

interface IState {
  inputValue: string;
  toDos: IToDo[];
}

export function reducer(state: IState, { payload, type }: IAction): IState {
  switch (type) {
    case 'add': {
      return { ...state, toDos: [...state.toDos, { name: payload.name }] };
    }

    case 'delete': {
      const newToDoList = [...state.toDos].filter((item) => item.name !== payload.name);
      return { ...state, toDos: [...newToDoList] };
    }

    case 'changeInput': {
      return { ...state, inputValue: payload.name };
    }

    default: {
      return state;
    }
  }
}
