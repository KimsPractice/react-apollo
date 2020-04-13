import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movies: { isLiked: () => false },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({
          id: `Movies:${id}`,
          data: {
            isLiked: true,
          },
        });
      },
    },
  },
});

export default client;
