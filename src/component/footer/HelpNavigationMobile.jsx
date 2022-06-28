import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 0 6rem;
`;

const GridContainer = styled.div`
  margin-top: 1.5rem;
`;
const GridItem = styled.div`
  font-size: 1.2rem;
  padding: 0.2rem 0;
  &:nth-child(1) {
    font-weight: 700;
    font-size: 1.5rem;
    padding-bottom: 0.2rem;
  }
`;
const QuickLink = styled.div`
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;

const SocialContainer = styled.div`
  display: flex;
  padding-top: 1rem;
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
`;

const FooterText = styled.span`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

const HelpNavigationMobile = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default HelpNavigationMobile;
