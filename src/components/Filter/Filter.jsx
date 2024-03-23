import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { filterTodo } from 'reduxTodo/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangInput = e => {
    dispatch(filterTodo(e.target.value));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleChangInput}
    />
  );
};
