import type { TodosComponent_todos$key } from "src/__generated__/TodosComponent_todos.graphql";

import { FC } from "react";
import { graphql, useFragment } from "react-relay";

import { Todo } from "./Todo";

interface Props {
  todos: TodosComponent_todos$key;
}

export const Todos: FC<Props> = (props) => {
  const data = useFragment(
    graphql`
      fragment TodosComponent_todos on Query {
        todos {
          id
          ...TodoComponent_todo
        }
      }
    `,
    props.todos
  );

  return (
    <>
      {data.todos.map((t) => (
        <Todo key={t.id} todo={t} />
      ))}
    </>
  );
};
