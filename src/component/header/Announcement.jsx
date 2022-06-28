import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 4.5rem;
  background-color: #cc641b;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

const Content = styled.span`
  font-size: 1.5rem;
  color: #fafafa;
  & > a {
    color: #fafafa;
    font-size: 1.5rem;
    &:hover {
      color: #3f3f3f;
      text-decoration: none;
    }
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Content>
        Become a subscriber and get up to 20% off! <a href="">Shop Now</a>
      </Content>
    </Container>
  );
};

export default Announcement;
