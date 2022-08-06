import type { NextPage } from "next";
import type { pagesTodosQuery as pagesTodosQueryType } from "src/__generated__/pagesTodosQuery.graphql";

import { graphql, useLazyLoadQuery } from "react-relay";
import { Todos } from "../Component/Todos";

interface Props {}
const Home: NextPage<Props> = (props) => {
  const data = useLazyLoadQuery<pagesTodosQueryType>(
    graphql`
      query pagesTodoQuery {
        ...TodosComponent_todos
      }
    `,
    {}
  );

  // const [commitMutation, isMutationInFlight] = useMutation<LikeButtonMutation>(
  //    graphql`
  //      mutation Foo($input: NewTodo!) {
  //        createTodo(input: $input) {
  //          todo {
  //i
  //          }
  //        }
  //      }
  //    `
  //  );
  //

  return (
    <>
      <Todos todos={data} />
      {/*
   <button
    onClick={() => commitMutation({
      variables: {
        input: {id: feedbackId},
      },
    })}
    disabled={isMutationInFlight}
  >
Add
  </button>
*/}
    </>
  );
};

export default Home;
