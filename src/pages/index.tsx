import type { NextPage } from "next";
import type { pagesTodosQuery as pagesTodosQueryType } from "src/__generated__/pagesTodosQuery.graphql";
import type { pagesCreateTodoMutation } from "src/__generated__/pagesCreateTodoMutation.graphql";

import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { Todos } from "../Component/Todos";

interface Props {}
const Home: NextPage<Props> = () => {
  const data = useLazyLoadQuery<pagesTodosQueryType>(
    graphql`
      query pagesTodosQuery($first: Int, $after: String) {
        todos(first: $first, after: $after) {
          ...TodosComponent_todo_connection
        }
      }
    `,
    { first: 4, after: "aaaa" }
  );

  const [commitMutation, isMutationInFlight] =
    useMutation<pagesCreateTodoMutation>(
      graphql`
        mutation pagesCreateTodoMutation($input: NewTodo!) {
          createTodo(input: $input) {
            id
            ...TodoComponent_todo
          }
        }
      `
    );

  return (
    <>
      <Todos todos={data.todos} />
      <button
        onClick={() =>
          commitMutation({
            variables: {
              input: { text: "added", userId: "kkk" },
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

export default Home;
