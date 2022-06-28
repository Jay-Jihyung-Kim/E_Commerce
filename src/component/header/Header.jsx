import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "./Announcement";
import HiddenNavigation from "./HiddenNavigation";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 500;
`;

const Header = () => {
  const [shown, setShown] = useState(null);

  const handleMouseOver = (category) => {
    setShown(category);
  };
  const handleMouseLeave = () => {
    setShown(null);
  };

  return (
    <React.Fragment>
      <Announcement />
      <Container>
        <Navbar onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
        <NavbarMobile />
        <HiddenNavigation
          category={shown}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      </Container>
    </React.Fragment>
  );
};

export default Header;
