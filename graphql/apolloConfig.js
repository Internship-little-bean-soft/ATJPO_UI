import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://kmitl-atjpo-api.hooray.site/",
  cache: new InMemoryCache(),
});

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const httpLink = createHttpLink({
//   uri: "https://kmitl-atjpo-api.hooray.site/",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = AsyncStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// export const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });
