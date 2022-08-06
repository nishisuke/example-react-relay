import type { NextPage } from "next";
import type { pagesTodosQuery as pagesTodosQueryType } from "src/__generated__/pagesTodosQuery.graphql";

import { graphql, useLazyLoadQuery } from "react-relay";
import { Todos } from "../Component/Todos";

interface Props {}
const Home: NextPage<Props> = () => {
  const data = useLazyLoadQuery<pagesTodosQueryType>(
    graphql`
      query pagesTodosQuery($first: Int, $after: String) {
        ...TodosComponent_query
      }
    `,
    { first: 4, after: "aaaa" }
  );

  return (
    <>
      <Todos todos={data} />
    </>
  );
};

export default Home;
