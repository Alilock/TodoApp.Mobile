import {useState, createContext, useEffect} from 'react';
import {TodosStorageHelper} from '../Helpers/TodosStorageHelper';
export const TodosContext = createContext(null);

export const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const values = {
    todos,
    setTodos,
  };

  useEffect(() => {
    TodosStorageHelper.get().then(data => {
      setTodos(data);
    });
  }, []);

  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};
