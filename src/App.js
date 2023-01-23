import {
  ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
const ddd = { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,onError };

const link = from ([
 errorLink,
 new HttpLink({
  uri: "http://localhost:5000/graphql"
 })
])

const client  = new ApolloClient({
  cache: {},
  link: link,
})

function App() {
  return <div>dsdsdfsfdf</div>;
}

export default App;
