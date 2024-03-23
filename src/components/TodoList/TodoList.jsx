import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <Grid>
      {todos.map((todo, counter) => (
        <GridItem key={todo.id}>
          <Todo todo={todo} counter={counter + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
