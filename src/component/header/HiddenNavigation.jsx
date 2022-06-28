import React, { useState } from "react";
import styled, { css } from "styled-components";

const listbasestyle = css`
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin: auto;
  max-width: 1000px;
  overflow: hidden;
  padding: 1rem 0;
  background-color: white;
  padding: 4rem;
  z-index: 998;
`;

const Women = styled.div`
  ${listbasestyle}
  display: ${(props) => (props.category === "Women" ? "flex" : "none")};
`;

const Men = styled.div`
  ${listbasestyle}
  display: ${(props) => (props.category === "Men" ? "flex" : "none")};
`;

const Kids = styled.div`
  ${listbasestyle}
  display: ${(props) => (props.category === "Kids" ? "flex" : "none")};
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  & > a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    &:hover {
      color: blue;
    }
  }

  & > a:first-child {
    font-weight: 700;
    line-height: 2.5rem;
  }
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

const HiddenNavigation = (props) => {
  return (
    <React.Fragment>
      <Women
        category={props.category}
        column="7"
        onMouseOver={() => props.onMouseOver("Women")}
        onMouseLeave={props.onMouseLeave}
      >
        <Items>
          <a href="">New</a>
          <a href="">New Arrivals</a>
        </Items>
        <Items>
          <a href="">Top</a>
          <a href="">Knits</a>
          <a href="">Sweaters</a>
          <a href="">Hoodies</a>
          <a href="">T-Shirts</a>
          <a href="">Tank Tops</a>
          <a href="">Graphic Tees</a>
        </Items>
        <Items>
          <a href="">Dresses</a>
          <a href="">Short Dresses</a>
          <a href="">Midi Dresses</a>
          <a href="">Rompers</a>
          <a href="">Jumpsuits</a>
        </Items>
        <Items>
          <a href="">Bottoms</a>
          <a href="">Jeans</a>
          <a href="">Shorts</a>
          <a href="">Skirts</a>
          <a href="">Pants</a>
          <a href="">Leggings</a>
        </Items>
        <Items>
          <a href="">Shoes</a>
          <a href="">Sandals</a>
          <a href="">Flats</a>
          <a href="">Boots</a>
          <a href="">Heels</a>
        </Items>
        <Items>
          <a href="">Accessories</a>
          <a href="">Scarves</a>
          <a href="">Bags</a>
          <a href="">Hats</a>
        </Items>
        <Img src="https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80" />
      </Women>

      <Men
        category={props.category}
        column="5"
        onMouseOver={() => props.onMouseOver("Men")}
        onMouseLeave={props.onMouseLeave}
      >
        <Items>
          <a href="">New</a>
          <a href="">New Arrivals</a>
        </Items>
        <Items>
          <a href="">Top</a>
          <a href="">T-Shirts</a>
          <a href="">Shirts</a>
          <a href="">Sweaters</a>
          <a href="">Polos</a>
        </Items>
        <Items>
          <a href="">Bottoms</a>
          <a href="">Jeans</a>
          <a href="">Shorts</a>
          <a href="">Skirts</a>
          <a href="">Pants</a>
          <a href="">Leggings</a>
        </Items>
        <Items>
          <a href="">Shoes</a>
          <a href="">Flip Flops</a>
          <a href="">Snickers</a>
          <a href="">Dress Shoes</a>
        </Items>
        <Items>
          <a href="">Accessories</a>
          <a href="">Hats</a>
          <a href="">Belts</a>
          <a href="">Socks</a>
          <a href="">Bags</a>
          <a href="">Ties</a>
        </Items>
        <Img src="https://images.unsplash.com/photo-1623041336882-68d8d0b18fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80" />
      </Men>

      <Kids
        category={props.category}
        column="5"
        onMouseOver={() => props.onMouseOver("Kids")}
        onMouseLeave={props.onMouseLeave}
      >
        <Img src="https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        <Items>
          <a href="">New</a>
          <a href="">New Arrivals</a>
        </Items>
        <Items>
          <a href="">Top</a>
          <a href="">T-Shirts</a>
          <a href="">Shirts</a>
          <a href="">Sweaters</a>
          <a href="">Dresses</a>
        </Items>
        <Items>
          <a href="">Bottoms</a>
          <a href="">Jeans</a>
          <a href="">Shorts</a>
          <a href="">Pants</a>
          <a href="">Skirts</a>
        </Items>
        <Items>
          <a href="">Shoes</a>
          <a href="">Flip Flops</a>
          <a href="">Snickers</a>
          <a href="">Sandals</a>
        </Items>
        <Items>
          <a href="">Accessories</a>
          <a href="">Hats</a>
          <a href="">Belts</a>
          <a href="">Socks</a>
        </Items>
      </Kids>
    </React.Fragment>
  );
};

export default HiddenNavigation;
