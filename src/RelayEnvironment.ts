import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(
async (params, variables ) => {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}),
  store: new Store(new RecordSource()),
});
