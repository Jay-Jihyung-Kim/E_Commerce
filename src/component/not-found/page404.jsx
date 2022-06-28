import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;
const Title = styled.h1`
  font-size: 4rem;
`;
const Comment = styled.p`
  font-size: 2rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 150px;
`;

const StyledLink = styled(Link)`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Page404 = () => {
  return (
    <Container>
      <Title>Oh No!</Title>
      <Comment>This Page does not exist.</Comment>
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/">Cart</StyledLink>
      </Links>
    </Container>
  );
};

export default Page404;
