import React from "react";
import styled from "styled-components";
import icon1Main from "../../assets/images/mainPage/icon1Main.png";
import icon2Main from "../../assets/images/mainPage/icon2Main.png";
import icon3Main from "../../assets/images/mainPage/icon3Main.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";


export const HowToStart = () => {
    return (
        <Container>
            <Title>How to start?</Title>
            <CardContainer>
                <Card>
                    <Img src={ icon1Main } alt={ "icon1Main" }/>
                    <CardName>
                        Create an application
                    </CardName>
                    <Description>All your data is encrypted and stored on secure servers</Description>
                </Card>
                <Card>
                    <Img src={ icon2Main } alt={ "icon1Main" }/>
                    <CardName>
                        Deposit money and confirm payment
                    </CardName>
                    <Description>Complete the verification process so that we can begin the process of exchanging your
                        money</Description>
                </Card>
                <Card>
                    <Img src={ icon3Main } alt={ "icon1Main" }/>
                    <CardName>
                        Receive money in your wallet
                    </CardName>
                    <Description>You can follow the status of the application online by staying on the site</Description>
                </Card>
            </CardContainer>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${rem("32")};
  width: 100%;
  grid-column: span 6;
  margin-top: ${rem("52px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-top: ${rem("32px")};
    grid-row-gap: ${rem("24")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column: span 3;
  }
`;


const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: ${rem("29px")};
  margin: 0 auto;
  font-weight: 700;
  padding-bottom: ${rem("25px")};
  padding-top: ${rem("25px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding-bottom: ${rem("15px")};
    padding-top: ${rem("25px")};
    font-size: ${rem("25px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding-bottom: ${rem("5px")};
    padding-top: ${rem("21px")};
    font-size: ${rem("22px")};
  }
`;

const CardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${rem("16")};
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      grid-template-columns: 1fr;
      grid-row-gap: ${rem("16px")};
    }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem("24px")};
  background: ${theme.colors.white};
  justify-content: center;
  text-align: center;
  border-radius: 10px;

  &:hover {
    background: ${theme.colors.spaceShuttle};

    div, p {
      color: ${theme.colors.white};
    }
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
     width: 100%; 
    }
`;

const CardName = styled.div`
  font-size: ${rem("17")};
  font-weight: 600;
  margin-bottom: ${rem("10")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("15")};
    margin-bottom: ${rem("9")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("12")};
    margin-bottom: ${rem("0")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      font-size: ${rem("13")};
      }
`;

const Img = styled.img`
  width: ${rem("42px")};
  height: ${rem("42px")};
  margin: 0 auto;
  margin-bottom: ${rem("18px")};
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("36px")};
    height: ${rem("36px")};
    margin-bottom: ${rem("10px")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      width: ${rem("40px")};
      height: ${rem("40px")};
      margin-bottom: ${rem("12px")}; 
      }
`;

const Description = styled.p`
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("12px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("11")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      font-size: ${rem("12")};

    }
`;
