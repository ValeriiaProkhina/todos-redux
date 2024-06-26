import { Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { chooseTodo, deleteTodo } from 'reduxTodo/sliceTodo';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(chooseTodo(todo));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={handleEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
