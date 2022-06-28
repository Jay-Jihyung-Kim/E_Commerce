import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1450px;
  margin: 4rem auto;
  border-top: 1px solid #92b6b1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #92b6b1;
`;
const SubscribeTitle = styled.h1`
  font-weight: 600;
  padding-top: 3rem;
  margin: 0;
  font-size: 2rem;
`;
const SubscribeText = styled.span`
  font-size: 1.8rem;
  ${mobile({ fontSize: "1.2rem" })}
`;
const Input = styled.input`
  font-size: 1.5rem;
  width: 100%;
  max-width: 350px;
  margin-top: 1.5rem;
  padding: 0.7rem 0 0.7rem 1rem;
  color: rgba(0, 0, 0, 0.7);
  border: none;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  font-size: 1.8rem;
  width: 100%;
  max-width: 450px;
  margin-top: 1.5rem;
  border: none;
  color: #fafafa;
  background: #202c39;
  padding: 0.7rem 0;
  ${mobile({ maxWidth: "80%" })}
`;
const SubscribeTerm = styled.span`
  font-size: 1.2rem;
  width: 100%;
  max-width: 550px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  ${mobile({ fontSize: "1rem", maxWidth: "90%" })}
  & > a {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
    ${mobile({ fontSize: "1rem" })}
    &:hover {
      color: #fafafa;
    }
  }
`;

const Subscribe = () => {
  return (
    <Container>
      <SubscribeTitle>Subscribe and receive 20% Off</SubscribeTitle>
      <SubscribeText>
        Be the first to know about our deals, updates and more!
      </SubscribeText>
      <Input placeholder="EMAIL ADDRESS" type="email" name="email"></Input>
      <Button>GET 20% OFF</Button>
      <SubscribeTerm>
        *By clicking "GET 20% OFF" button you have granted a permission for us
        to send a promotional offers to the email you have provided and agreed
        to our <a href="">Terms</a> & <a href="">Privacy Policy</a>.
      </SubscribeTerm>
    </Container>
  );
};

export default Subscribe;
