import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../Components/Todos';
import useActions from '../lib/useAction';

const TodosContainer = () => {
  const { input, todos } = useSelector(({todos}) => ({
    input: todos.input,
    todos: todos.todos
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);