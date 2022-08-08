import { FC, ReactNode } from "react";
import { graphql, useFragment } from "react-relay";

import type { TodoComponent_todo$key } from "src/__generated__/TodoComponent_todo.graphql";

interface Props {
  todo: TodoComponent_todo$key;
  user: ReactNode;
}

export const Todo: FC<Props> = (props) => {
  const todo = useFragment(
    graphql`
      fragment TodoComponent_todo on Todo {
        text
        done
      }
    `,
    props.todo
  );

  return (
    <>
      <div>
        {todo.text}
        {props.user}
      </div>
    </>
  );
};
