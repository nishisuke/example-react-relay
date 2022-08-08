import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import RelayEnvironment from "../RelayEnvironment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
