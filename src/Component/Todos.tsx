
import type {TodosQuery} from './__generated__/TodosQuery.graphql';

import type {PreloadedQuery} from 'react-relay';

import { FC } from 'react'
import {graphql, usePreloadedQuery} from 'react-relay'

import { Todo } from './Todo';

interface Props {
  queryRef: PreloadedQuery<TodosQuery>,

}



export const Todos: FC<Props> = (props) => {
 const data = usePreloadedQuery<TodosQuery>(
    graphql`
query TodosQuery {
todos {

id
...TodoComponent_todo
}
      }
    `,
    props.queryRef,
  );

console.log(data,'data')
  return (
    <>
{data.todos.map(t => <Todo key={t.id} todo={t}/>)}
    </>
  )
}
