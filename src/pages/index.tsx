import type { NextPage } from 'next'


import TodosQuery from '../__generated__/TodosQuery.graphql'
import type {TodosQuery as TodosQueryType}  from '../__generated__/TodosQuery.graphql'


import {useQueryLoader,loadQuery } from 'react-relay'
import {Todos} from '../Component/Todos'
import RelayEnvironment from '../RelayEnvironment'

const preload = loadQuery<TodosQueryType>(RelayEnvironment, TodosQuery, {})

const Home: NextPage = () => {

const [queryRef , load]= useQueryLoader<TodosQueryType>(TodosQuery, preload)
console.log(queryRef)

return (
<>
{queryRef && <Todos queryRef={queryRef} />}
<button onClick={() => load({})}>
hey
</button>
</>

)
}

export default Home
