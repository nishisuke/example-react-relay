import type { TodosComponent_query$key } from "src/__generated__/TodosComponent_query.graphql";
import type { TodosCreateTodoMutation } from "src/__generated__/TodosCreateTodoMutation.graphql";
import { graphql, useFragment, useMutation } from "react-relay";
import { User } from "./User";

import { FC } from "react";

import { Todo } from "./Todo";

interface Props {
  todos: TodosComponent_query$key;
}

export const Todos: FC<Props> = (props) => {
  const data = useFragment(
    graphql`
      fragment TodosComponent_query on Query
      @refetchable(queryName: "TodosQuery") {
        todos(first: $first, after: $after) @connection(key: "Todos_todos") {
          __id
          edges {
            node {
              id
              ...TodoComponent_todo
              user {
                ...UserComponent_user
              }
            }
          }
        }
      }
    `,
    props.todos
  );
  const conId = data.todos.__id;
  const [commitMutation, isMutationInFlight] =
    useMutation<TodosCreateTodoMutation>(
      graphql`
        mutation TodosCreateTodoMutation($input: NewTodo!, $con: [ID!]!) {
          createTodo(input: $input) @appendEdge(connections: $con) {
            cursor
            node {
              id
              ...TodoComponent_todo
            }
          }
        }
      `
    );
  return (
    <>
      {data.todos.edges.map((e) => (
        <Todo
          key={e.node.id}
          todo={e.node}
          user={<User user={e.node.user} />}
        />
      ))}
      <button
        onClick={() =>
          commitMutation({
            variables: {
              input: { text: "added", userId: "kkk" },
              con: [conId],
            },
          })
        }
        disabled={isMutationInFlight}
      >
        Add
      </button>
    </>
  );
};
