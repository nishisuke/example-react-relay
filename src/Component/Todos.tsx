import type { TodosComponent_todo_connection$key } from "src/__generated__/TodosComponent_todo_connection.graphql";

import { FC } from "react";
import { graphql, useFragment } from "react-relay";

import { Todo } from "./Todo";

interface Props {
  todos: TodosComponent_todo_connection$key;
}

export const Todos: FC<Props> = (props) => {
  const data = useFragment(
    graphql`
      fragment TodosComponent_todo_connection on TodoConnection {
        edges {
          node {
            id
            ...TodoComponent_todo
          }
        }
      }
    `,
    props.todos
  );

  return (
    <>
      {data.edges.map((e) => (
        <Todo key={e.node.id} todo={e.node} />
      ))}
    </>
  );
};
