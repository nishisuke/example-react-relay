import type { NextPage } from 'next'


import TodosQuery from 'src/__generated__/TodosQuery.graphql'
import type {TodosQuery as TodosQueryType}  from 'src/__generated__/TodosQuery.graphql'


import {useQueryLoader,loadQuery } from 'react-relay'
import {Todos} from '../Component/Todos'
import RelayEnvironment from '../RelayEnvironment'

const preload = loadQuery<TodosQueryType>(RelayEnvironment, TodosQuery, {})

const Home: NextPage = () => {

return (
<>
<Todos queryRef={preload} />
</>

)
}

export default Home
