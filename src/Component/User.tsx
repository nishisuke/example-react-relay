import { FC } from 'react'
import {graphql, useFragment} from 'react-relay'

import type {UserComponent_user$key} from '../__generated__/UserComponent_user.graphql';

interface Props {
  user: UserComponent_user$key,

}

export const User: FC<Props> = (props) => {
 const user = useFragment(
    graphql`
    fragment UserComponent_user on User {
        name
      }
    `,
    props.user,
  );

  return (
    <>
    <div>{user.name}</div>
    </>
  )
}
