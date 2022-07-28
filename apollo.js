import { InMemoryCache } from "apollo-cache-inmemory";

export default (context) => {
  return {
    httpEndpoint: "https://tomaszukovskij.com/admin/graphql",
    cache: new InMemoryCache()
  };
};
