import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Badge } from "@material-ui/core";
import HelpNavigationMobile from "../footer/HelpNavigationMobile";

const Mobile = styled.div`
  display: none;
  ${mobile({ display: "block" })}
`;
const Container = styled.div`
  height: 6rem;
  max-height: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background-color: white;
  z-index: 998;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Menu = styled.div`
  flex-grow: 1;
`;

const BrandName = styled.h1`
  font-size: 5rem;
  font-family: "Beau Rivage", cursive;
  padding-top: 1rem;
  flex-grow: 10;
  color: black;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  opacity: 70%;
`;

const Search = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const InputContainer = styled.form`
  width: 100%;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0 9rem;
  display: ${(props) => props.display};
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  transition: all 0.5s;
  padding-left: 1rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 2rem;
  }
`;

const Account = styled.div``;
const Shopping = styled.div``;

//HiddenList//
const HiddenContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: ${(props) => props.width};
  position: absolute;
  width: 100%;
  z-index: 10000;
  overflow: hidden;
  transition: max-width 0.3s;
  overflow: scroll;
  white-space: nowrap;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
`;

const Signup = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 2rem 0rem;
  max-width: 80%;
  margin: auto;
  & > a {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  & > a:last-child {
    margin-left: 0.5rem;
  }
`;

const Category = styled.div``;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  padding: 2rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: auto;
`;

const categoryStyle = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 80%;
  margin: auto;
  padding: 0rem 2rem;
  & > a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.3rem;
    padding-bottom: 3rem;
    padding-left: 0.5rem;
  }
  & > a:first-child {
    padding-top: 1rem;
  }
`;

const CategoryNew = styled.div`
  ${categoryStyle}
  height: ${(props) => (props.category === "new" ? "100" : "0")};
  transition: height 0.7s;
`;

const CategoryWomen = styled.div`
  ${categoryStyle}
  height: ${(props) => (props.category === "women" ? "100" : "0")};
  transition: height 0.7s;
`;

const CategoryMen = styled.div`
  ${categoryStyle}
  height: ${(props) => (props.category === "men" ? "100" : "0")};
  transition: height 0.7s;
`;

const CategoryKid = styled.div`
  ${categoryStyle}
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.category === "kid" ? "100" : "0")};
  transition: height 0.7s;
`;

const NavbarMobile = () => {
  const [navwidth, setNavwidth] = useState("0%");
  const [search, setSearch] = useState("none");
  const [menu, setMenu] = useState("block");
  const [xmark, setXmark] = useState("none");
  const [category, setCategory] = useState("null");

  function openNav() {
    setNavwidth("100%");
    setMenu("none");
    setXmark("block");
    closeSearch();
  }
  function closeNav() {
    setNavwidth("0%");
    setMenu("block");
    setXmark("none");
  }
  function openSearch() {
    setSearch("flex");
    closeNav();
  }
  function closeSearch() {
    setSearch("none");
  }

  function openCategory(name) {
    if (category !== name) {
      setCategory(name);
    }
    if (category === name) {
      setCategory("null");
    }
    console.log(name);
  }
  function closeCategory() {
    setCategory("null");
  }

  return (
    <Mobile>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BrandName>level</BrandName>
        </Link>
        <Icons>
          <Search>
            <SearchIcon
              style={{ fontSize: "3.3rem", fontWeight: "100" }}
              onClick={openSearch}
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
          <Menu>
            <MenuIcon
              style={{ fontSize: "3.5rem", display: menu }}
              onClick={openNav}
            />
            <CloseIcon
              style={{ fontSize: "3.5rem", display: xmark }}
              onClick={closeNav}
            />
          </Menu>
        </Icons>
      </Container>
      <InputContainer display={search}>
        <SearchIcon
          style={{
            fontSize: "2.5rem",
            fontWeight: "100",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Input placeholder="Search..." />
        <CloseIcon
          style={{ fontSize: "2.5rem", color: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeSearch}
        />
      </InputContainer>

      <HiddenContainer width={navwidth} onClick={closeSearch}>
        <Signup>
          <Link to="/login">Sign in </Link> or <Link to="">Register!</Link>
        </Signup>
        <Category>
          <Title onClick={() => openCategory("new")}>
            New
            <ExpandMoreIcon style={{ fontSize: "1.8rem", margin: "0" }} />
          </Title>
          <CategoryNew category={category}>
            <a href="/products">NEW SEASONAL</a>
            <a href="/products">SPRING 2022</a>
            <a href="/products">JUST ARRIVED</a>
          </CategoryNew>
        </Category>
        <Category>
          <Title onClick={() => openCategory("women")}>
            Women
            <ExpandMoreIcon style={{ fontSize: "1.8rem", margin: "0" }} />
          </Title>
          <CategoryWomen category={category}>
            <a href="/products">NEW WOMEN</a>
            <a href="/products">NEW TOPS</a>
            <a href="/products">NEW DRESSES</a>
            <a href="/products">NEW BOTTOMS</a>
            <a href="/products">NEW SHOES</a>
            <a href="/products">NEW ACCESSORIES</a>
          </CategoryWomen>
        </Category>
        <Category>
          <Title onClick={() => openCategory("men")}>
            Men
            <ExpandMoreIcon style={{ fontSize: "1.8rem", margin: "0" }} />
          </Title>
          <CategoryMen category={category}>
            <a href="/products">NEW MEN</a>
            <a href="/products">NEW SHIRTS</a>
            <a href="/products">NEW PANTS</a>
            <a href="/products">NEW SHOES</a>
            <a href="/products">NEW ACCESORIES</a>
          </CategoryMen>
        </Category>
        <Category>
          <Title onClick={() => openCategory("kid")}>
            Kids
            <ExpandMoreIcon style={{ fontSize: "1.8rem", margin: "0" }} />
          </Title>
          <CategoryKid category={category}>
            <a href="/products">NEW KIDS</a>
            <a href="/products">NEW SHIRTS</a>
            <a href="/products">NEW PANTS</a>
            <a href="/products">NEW SHOES</a>
            <a href="/products">NEW ACCESORIES</a>
          </CategoryKid>
        </Category>
        <HelpNavigationMobile />
      </HiddenContainer>
    </Mobile>
  );
};

export default NavbarMobile;
