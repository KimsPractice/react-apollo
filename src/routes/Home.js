import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (data && data.movies) {
    const { movies } = data;
    return <h1>{movies.map(movie => movie.id)}</h1>;
  }
};
