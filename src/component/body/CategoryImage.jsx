import React, { useState } from "react";
import { mobile } from "../../responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1450px;
  margin: 4.5rem auto 0;
`;
const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
  width: 100%;
  ${mobile({ display: "none" })}
`;
const GridItem = styled.div`
  display: grid;
  grid-gap: 5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    opacity: 90%;
    transition: all 0.5s;
    &:nth-child(2) {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: ${(props) => props.opacity};
    }
  }
`;

const ImageText = styled.span`
  font-size: 5rem;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: "Beau Rivage", cursive;
  color: ${(props) => props.color};
`;

const CategoryImage = () => {
  const [saleImage, SetSaleImage] = useState("0");
  const [saleColor, SetSaleColor] = useState("white");

  function handleMouseOver() {
    SetSaleImage("100");
    SetSaleColor("black");
  }

  function handleMouseLeave() {
    SetSaleImage("0");
    SetSaleColor("white");
  }

  return (
    <Container>
      <ContainerGrid>
        <GridItem grid="70% 30%">
          <ImageContainer
            opacity={saleImage}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              style={{ height: "600px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              style={{ height: "600px" }}
            />
            <ImageText color={saleColor}>Men</ImageText>
          </ImageContainer>
          <ImageContainer
            opacity={saleImage}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.unsplash.com/photo-1562157705-52df57a5883b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              style={{ height: "400px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1614606140752-7ebc097a67ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
              alt=""
              style={{ height: "400px" }}
            />
            <ImageText color={saleColor}>Accessories</ImageText>
          </ImageContainer>
        </GridItem>
        <GridItem grid="30% 70%">
          <ImageContainer
            opacity={saleImage}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.unsplash.com/photo-1632748914020-941675839f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
              alt=""
              style={{ height: "400px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              style={{ height: "400px" }}
            />
            <ImageText color={saleColor}>Shoes</ImageText>
          </ImageContainer>
          <ImageContainer
            opacity={saleImage}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://images.unsplash.com/photo-1528813569347-f16dd076e347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              style={{ height: "600px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80"
              alt=""
              style={{ height: "600px" }}
            />
            <ImageText color={saleColor}>Women</ImageText>
          </ImageContainer>
        </GridItem>
      </ContainerGrid>
    </Container>
  );
};

export default CategoryImage;
