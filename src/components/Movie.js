import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: visible;
  border-radius: 7px;
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

export default ({ id, bg, title }) => (
  <Container>
    <TestLink to={`/${id}`}>
      <Poster bg={bg}>{title}</Poster>
    </TestLink>
  </Container>
);
