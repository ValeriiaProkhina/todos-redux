import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { visibleTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(visibleTodos);
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
