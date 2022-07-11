import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthorizerProvider } from "@authorizerdev/authorizer-react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://authorizer-production-3b11.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthorizerProvider
      config={{
        authorizerURL: process.env.NEXT_PUBLIC_AUTHORIZER_URL!,
        redirectURL: "http://localhost:3000/profile",
        clientID: process.env.NEXT_PUBLIC_CLIENT_ID, // obtain your client id from authorizer dashboard
        //   extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
      }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthorizerProvider>
  );
}

export default MyApp;
