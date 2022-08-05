import { FC } from 'react'
import {graphql, useFragment} from 'react-relay'
import {User} from './User';

import type {TodoComponent_todo$key} from './__generated__/TodoComponent_todo.graphql';

interface Props {
  todo: TodoComponent_todo$key,
}



export const Todo: FC<Props> = (props) => {
 const todo = useFragment(
    graphql`
    fragment TodoComponent_todo on Todo {
        text
        done
user {
...UserComponent_user
}
      }
    `,
    props.todo,
  );

  return (
    <>
    <div>{todo.text}
<User user={todo.user} />

</div>
    </>
  )
}
