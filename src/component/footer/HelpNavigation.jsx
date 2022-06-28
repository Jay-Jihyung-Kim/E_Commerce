import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const FooterContainer = styled.div`
  max-width: 1450px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  margin: auto;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const GridContainer = styled.div``;
const GridItem = styled.div`
  font-size: 1.2rem;
  padding: 0.2rem 0;
  &:nth-child(1) {
    font-weight: 700;
    font-size: 1.5rem;
    padding-bottom: 0.6rem;
  }
`;
const QuickLink = styled.div`
  font-size: 1.2rem;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridGap: "4px",
  })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  ${mobile({ margin: "0" })}
`;

const FooterText = styled.span`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const HelpNavigation = () => {
  return (
    <FooterContainer>
      <Container>
        <GridContainer>
          <GridItem>Company Info</GridItem>
          <GridItem>About Us</GridItem>
          <GridItem>Terms of Service</GridItem>
          <GridItem>Affiliate Program</GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem>Help</GridItem>
          <GridItem>Contact Us</GridItem>
          <GridItem>Return Policy</GridItem>
          <GridItem>Order Status</GridItem>
        </GridContainer>
        <QuickLink>
          <GridItem>Follow Us</GridItem>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </QuickLink>
      </Container>
      <FooterText>© 2022, LeveL All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default HelpNavigation;
