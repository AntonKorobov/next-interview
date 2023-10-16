import { useReducer } from 'react';
import { ToDoItem } from './ToDoItem';
import { reducer } from './reducer';

export function ToDo() {
  const [state, dispatch] = useReducer(reducer, {
    inputValue: 'olk',
    toDos: [],
  });

  function handleAddToDo(value: string) {
    dispatch({
      type: 'add',
      payload: {
        name: value,
      },
    });
  }

  function deleteToDo(value: string) {
    dispatch({
      type: 'delete',
      payload: {
        name: value,
      },
    });
  }

  return (
    <div>
      <h3>ToDo</h3>
      <input
        type="text"
        value={state.inputValue}
        onChange={(e) => {
          dispatch({
            type: 'changeInput',
            payload: {
              name: e.target.value,
            },
          });
        }}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleAddToDo(state.inputValue)}>Add new</button>
        <button onClick={() => deleteToDo(state.inputValue)}>Delete</button>
      </div>

      {state.toDos.length > 0 &&
        state.toDos.map((item) => {
          return <ToDoItem key={item.name} name={item.name}></ToDoItem>;
        })}
    </div>
  );
}
