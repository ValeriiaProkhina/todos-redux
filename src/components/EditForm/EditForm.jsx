import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/selectors';
import { chooseTodo, editTodo } from 'reduxTodo/sliceTodo';

export const EditForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodo(e.target.elements.text.value.trim()));
  };
  const handleCancel = () => {
    dispatch(chooseTodo(null));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
