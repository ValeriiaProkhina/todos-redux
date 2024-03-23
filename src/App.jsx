import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodos } from 'reduxTodo/selectors';

export const App = () => {
  const isEdit = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {isEdit ? <EditForm /> : <Form />}
          {todos.length && <Filter />}
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
