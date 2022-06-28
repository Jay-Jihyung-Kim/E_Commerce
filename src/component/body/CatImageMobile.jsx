import React, { useState } from "react";
import { mobile } from "../../responsive";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1450px;
  margin: auto;
`;
const ContainerGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 5rem;
  @media only screen and (min-width: 650px) {
    display: none;
  }
  & > img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    opacity: 90%;
    transition: all 0.5s;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: -30px;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 400px;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 2rem;
`;
const TextTitle = styled.h1`
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-size: 3.5rem;
  margin: 0;
`;
const TextSub = styled.h3`
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  padding-bottom: 1rem;
`;
const TextDesc = styled.span`
  font-size: 1.8rem;
  font-weight: 200;
  margin: 1rem 0 1rem 1rem;
`;

const BlockHidden = () => {
  return (
    <Container>
      <ContainerGrid>
        <Card>
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </ImgContainer>
          <TextContainer>
            <TextTitle>All New Things</TextTitle>
            <TextSub>New seasonal clothes are here!</TextSub>
            <TextDesc>
              Women <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Dresses <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Tops <ArrowForwardOutlinedIcon />
            </TextDesc>
          </TextContainer>
        </Card>
        <Card>
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </ImgContainer>
          <TextContainer>
            <TextTitle>Classic Men</TextTitle>
            <TextSub>Find your classic look</TextSub>
            <TextDesc>
              Men <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Shirts <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Jeans <ArrowForwardOutlinedIcon />
            </TextDesc>
          </TextContainer>
        </Card>
        <Card>
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
          </ImgContainer>
          <TextContainer>
            <TextTitle>Something to top if off</TextTitle>
            <TextSub>Complete your style</TextSub>
            <TextDesc>
              Watch <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Accessories <ArrowForwardOutlinedIcon />
            </TextDesc>
            <TextDesc>
              Shoes <ArrowForwardOutlinedIcon />
            </TextDesc>
          </TextContainer>
        </Card>
      </ContainerGrid>
    </Container>
  );
};

export default BlockHidden;
