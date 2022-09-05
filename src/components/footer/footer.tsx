import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/common/logo.png";
import tgSquare from "../../assets/images/common/tgSquare.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { navMenuItem } from "../../mockData/navMenuItem";

export const Footer = () => {
    const history = useHistory();

    return (
        <Container>
            <Content>
                <LeftPart>
                    <ImgLogo onClick={ () => history.push("/") } src={ Logo } alt={ "logo" }/>
                    <Description>
                        SERVICE OF QUALITY AND FAST EXCHANGE OF CRYPTOCURRENCIES 24/7
                        <br/>
                        © All rights reserved. Copyright © 2015 - { new Date().getFullYear() }
                    </Description>
                </LeftPart>
                <RightPart>
                    <FooterItem onClick={ () => history.push(navMenuItem[0].link) }>Exchange conditions</FooterItem>
                    <FooterItem onClick={ () => history.push(navMenuItem[1].link) }>Contacts</FooterItem>
                    <Img src={ tgSquare } alt={ "telegram" }/>
                </RightPart>
            </Content>
        </Container>
    );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  background: ${theme.colors.gainsBoro};
  width: 100%;
`;

const Content = styled.section`
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  background: ${theme.colors.gainsBoro};
  width: 100%;
  padding: ${rem("25px")};
  grid-column-gap: ${rem("64px")};
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-template-columns:1fr;
    grid-row-gap: ${rem("10px")};
  }
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${rem("8px")};
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    justify-content: center;
  }
`;

const RightPart = styled.div`
  display: flex;
  grid-column-gap: ${rem("16px")};
  justify-content: space-between;
  padding-left: ${rem("50px")};
  height: fit-content;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding-left: 0 !important;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-row: 1;
  }
`;

const ImgLogo = styled.img`
  width: ${rem("182px")};
  height: ${rem("95px")};
  cursor: pointer;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("132px")};
    height: ${rem("72px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("122px")};
    height: ${rem("65px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: ${rem("90px")};
    height: ${rem("50px")};
    margin: 0 auto ;
  }
`;

const Description = styled.div`
  font-size: ${rem("14px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("14px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("12px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("10px")};
    text-align: center;
    line-height: ${rem("16px")};
  }
`;

const FooterItem = styled.p`
  width: fit-content;
  margin: 0;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    border-bottom: 1px solid ${theme.colors.spaceShuttle};
    padding-bottom: ${rem("1px")};
    height: fit-content;
    color: ${theme.colors.spaceShuttle};
    width: fit-content;
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("14px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("13px")};
    white-space: nowrap;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("11px")};
  }
`;

const Img = styled.img`
  width: ${rem("40px")};
  height: ${rem("40px")};
  cursor: pointer;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: ${rem("32px")};
    height: ${rem("32px")};
  }
`;
