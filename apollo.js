import { InMemoryCache } from "apollo-cache-inmemory";

export default (context) => {
  return {
    httpEndpoint: "https://tomaszukovskij.com/admin/graphql",
    cache: new InMemoryCache(),
    apollo: {
      // Default is 100ms, during which apollo-client silently turns 'network-only'
      // into 'cache-first'. That made the mounted() refetches return the stale
      // data baked in by `nuxt generate` instead of fresh WordPress content.
      ssrForceFetchDelay: 0,
    },
  };
};
