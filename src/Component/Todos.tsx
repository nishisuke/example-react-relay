import type { TodosComponent_query$key } from "src/__generated__/TodosComponent_query.graphql";

import { FC } from "react";
import { graphql, useFragment } from "react-relay";

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
          edges {
            node {
              id
              ...TodoComponent_todo
            }
          }
        }
      }
    `,
    props.todos
  );

  return (
    <>
      {data.todos.edges.map((e) => (
        <Todo key={e.node.id} todo={e.node} />
      ))}
    </>
  );
};
