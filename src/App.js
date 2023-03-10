import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
import Form from "./components/Form";
import GetUsers from "./components/GetUsers";

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQl error ${message} with${location} ${path}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:5000/graphql",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Form/>
        <GetUsers/>
      </div>
    </ApolloProvider>
  );
}

export default App;
