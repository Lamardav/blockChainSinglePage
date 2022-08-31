import React from "react";
import styled from "styled-components";
import tg from "../../assets/images/common/tgCircle.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { BreadCrumb } from "../../components/breadCrumb/breadCrumb";

export const Contacts = () => {
    return (
        <>
            <BreadCrumb linkName={ "Contacts" }/>
            <Main>

                <Title>
                    CONTACTS
                </Title>
                <Content>
                    <Item>
                        <Img src={ tg } alt={ "telegram" }/> <P>Telegram</P>
                    </Item>
                    <Alert>If something went wrong, for more efficiency, write to us in telegram, the contact button is in the
                        upper right part of the screen. Our experts will be happy to answer any of your questions.</Alert>
                </Content>
            </Main>
            <RightBlock>
                SERVICE OF QUALITY AND FAST EXCHANGE OF CRYPTOCURRENCIES 24/7
                <Button>Start exchange</Button>
            </RightBlock>
        </>
    );
};


const Main = styled.div`
  grid-column: span 4;
  flex-direction: column;
  grid-row-gap: ${rem("16px")};
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    grid-column: span 6;
  };
`;

const Title = styled.h1`
  color: ${theme.colors.spaceShuttle};
  font-size: ${rem("36px")};
  font-weight: 700;
  text-transform: uppercase;
  padding: ${rem("20px")} 0 ${rem("20px")};
  margin: 0;
  margin-top: ${rem("10px")};
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("28px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("22px")};
  }
`;


const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  color: ${theme.colors.spaceShuttle};
  font-size: ${rem("20px")};
  font-weight: 700;
  text-transform: uppercase;
  padding: ${rem("20px")} 0 ${rem("20px")};
  margin: 0;
  margin-top: ${rem("10px")};
  height: fit-content;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    grid-column: span 6;
    margin-top: ${rem("24px")};
  };
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue};
  text-transform: uppercase;
  color: ${theme.colors.white};
  border: none;
  font-size: ${rem("16px")};
  font-weight: 700;
  padding: 0 ${rem("23px")};
  white-space: nowrap;
  height: ${rem("60px")};
  border-radius: 6px;
  box-shadow: 0 9px 20px rgb(0 0 0 / 16%);
  transition: all .4s;
  margin-top: ${rem("24px")};
  width: fit-content;
  cursor: pointer;
  margin-top: ${rem("24px")};

  &:hover {
    background: ${theme.colors.lightBlue};
  }

  &:active {
    background: ${theme.colors.heavyBlue};
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: 0 ${rem("20px")};
    height: ${rem("64px")};
    font-size: ${rem("15px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: 0 ${rem("16px")};
    height: ${rem("48px")};
    font-size: ${rem("13px")};
  }
`;


const Content = styled.div`
  padding: ${rem("32")} ${rem("24")} ${rem("24")};
  box-shadow: 0 8px 16px rgb(0 0 0 / 5%);
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: ${rem("24px")};
  border-radius: 8px;
  min-height: ${rem("350px")};
  grid-row-gap: ${rem("24px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    min-height: ${rem("330px")};
    grid-row-gap: ${rem("20px")};
    padding: ${rem("22px")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      min-height: ${rem("300px")};
      grid-row-gap: ${rem("16px")};
      padding: ${rem("16px")};
      }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: ${rem("12px")};
  cursor: pointer;
`;

const Img = styled.img`
  width: ${rem("42")};
  height: ${rem("42px")};
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      width: ${rem("34")};
      height: ${rem("34px")};  
      }
`;

const P = styled.p`
  margin: 0;
  width: fit-content;
  color: ${theme.colors.spaceShuttle};
  font-weight: 600;
  font-size: ${rem("20px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("19px")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      font-size: ${rem("17px")};

    }
`;

const Alert = styled.div`
  padding: ${rem("24px")};
  font-size: ${rem("16px")};
  font-weight: 500;
  border-radius: ${rem("8px")};
  background-color: ${theme.colors.spaceShuttle};
  color: ${theme.colors.white};
  line-height: ${rem("22")};
  margin-top: auto;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: ${rem("20px")};
    font-size: ${rem("15px")};
    line-height: ${rem("22")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    padding: ${rem("16px")};
    font-size: ${rem("13px")};
    line-height: ${rem("23")};
  }
`;
