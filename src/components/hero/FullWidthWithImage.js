import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import refinery from 'images/refinery.jpg'
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url(${refinery});
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none text-primary-500`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose text-primary-500`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Manufacturers</NavLink>
      <NavLink href="#">Contact</NavLink>
      {/* <NavLink href="#">News</NavLink> */}
    </NavLinks>
  ],
  heading = (
    <>
      Kama Ltd.
      <wbr />
      <br />
      <span tw="text-secondary-500">Advanced flow solutions</span>
    </>
  ),
  description = "KAMA Ltd. was established in 1980 as a manufacturers representative and distributor in the area of industrial control instrumentation.",
}) => {
  return (
    <AnimationRevealPage>
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
    </AnimationRevealPage>
  );
};
