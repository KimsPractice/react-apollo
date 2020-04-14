import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: visible;
  border-radius: 7px;
  background-color: white;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  color: black;
`;

const TestLink = styled(Link)`
  text-decoration: none;
`;

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

export default ({ id, bg, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: {
      id: parseInt(id),
      isLiked,
    },
  });

  return (
    <Container>
      <TestLink to={`/${id}`}>
        <Poster bg={bg}></Poster>
      </TestLink>
      <button onClick={toggleLikeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};
