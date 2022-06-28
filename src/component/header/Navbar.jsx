import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Badge } from "@material-ui/core";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 999;
  ${mobile({ display: "none" })}
`;

const Sticky = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5rem;
  margin: auto;
  max-width: 1200px;
  top: 0;
`;

const BrandName = styled.h1`
  font-size: 5rem;
  font-family: "Beau Rivage", cursive;
  padding-top: 1rem;
  color: black;
  text-decoration: none;
`;

const Navlist = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  height: 100%;
  margin: auto;
  padding-left: 3rem;
  flex-grow: 8;
  opacity: 60%;
  & > a {
    text-decoration: none;
    color: black;
    padding-left: 3rem;
    font-weight: 500;
    &:hover {
      opacity: 100%;
      text-decoration: underline;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 3rem;
  opacity: 70%;
`;

const Search = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  height: 100%;
  width: 20rem;
  font-size: 1.8rem;
  border: none;
  max-width: ${(props) => props.maxWidth};
  border-bottom: 2px solid black;
  padding: 0;
  padding-bottom: 2px;
  transition: all 0.5s;
  &:focus {
    outline: none;
  }
  &::placeholder {
    margin-bottom: 10px 0;
  }
`;

const Account = styled.div``;
const Shopping = styled.div``;

const Navbar = (props) => {
  const [search, setSearch] = useState("0");

  function handleMouseOver() {
    setSearch("100");
  }

  function handleMouseLeave() {
    setSearch("0");
  }

  return (
    <Container onMouseLeave={props.onMouseLeave}>
      <Sticky>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BrandName>level</BrandName>
        </Link>
        <Navlist>
          <Link to="/products" onMouseOver={() => props.onMouseOver("null")}>
            New
          </Link>
          <Link to="/products" onMouseOver={() => props.onMouseOver("Women")}>
            Women
          </Link>
          <Link to="/products" onMouseOver={() => props.onMouseOver("Men")}>
            Men
          </Link>
          <Link to="/products" onMouseOver={() => props.onMouseOver("Kids")}>
            Kids
          </Link>
          <Link to="/products" onMouseOver={() => props.onMouseOver("null")}>
            Sale
          </Link>
        </Navlist>
        <Icons>
          <Search onMouseLeave={handleMouseLeave}>
            <Input type="text" placeholder="Search..." maxWidth={search} />
            <SearchIcon
              style={{ fontSize: "3rem", fontWeight: "100" }}
              onMouseOver={handleMouseOver}
            />
          </Search>
          <Account>
            <Link to="/login">
              <PersonOutlineOutlinedIcon
                style={{ fontSize: "3.5rem", color: "black" }}
              />
            </Link>
          </Account>
          <Shopping>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon
                color="action"
                style={{ fontSize: "3rem", color: "black" }}
              />
            </Badge>
          </Shopping>
        </Icons>
      </Sticky>
    </Container>
  );
};

export default Navbar;
