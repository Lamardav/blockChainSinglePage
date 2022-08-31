import React from "react";
import styled from "styled-components";
import hours from "../../assets/images/mainPage/24hours.png";
import customer from "../../assets/images/mainPage/customerService.png";
import service from "../../assets/images/mainPage/moneyExchange.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

export const FormLeft = () => {
    return (
        <LeftBlock>
            <Title>
                SERVICE OF QUALITY AND FAST EXCHANGE OF CRYPTOCURRENCIES 24/7
            </Title>
            <Description>
                We are a large professional customer support team, turning to us, you can always count on the best service and
                fast transaction
            </Description>
            <Card>
                <CardHeader>
                    <Img src={ hours } alt={ "24 hour exchange" }/>
                    24 hour exchange
                </CardHeader>
                <CardFooter>
                    Automatic payout system
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Img src={ service } alt={ "Exchange in 15 minutes " }/>
                    Exchange in 15 minutes
                </CardHeader>
                <CardFooter>
                    Average exchange time so far
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Img src={ customer } alt={ " Best crypto support" }/>
                    Best crypto support
                </CardHeader>
                <CardFooter>
                    Average agent response time 2 minutes
                </CardFooter>
            </Card>
        </LeftBlock>
    );
};

const LeftBlock = styled.div`
  display: flex;
  grid-column: span 3;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: ${rem("32px")};
  margin-bottom: ${rem("12px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("28px")};
    margin-bottom: ${rem("11px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("23.5px")};
    margin-bottom: ${rem("9px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("21px")};
    margin-bottom: ${rem("8px")};
  }
`;

const Description = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: ${rem("16px")};
  margin-bottom: ${rem("24px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("15px")};
    margin-bottom: ${rem("22px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("13px")};
    margin-bottom: ${rem("19px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("12px")};
    margin-bottom: ${rem("16px")};
  }
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${rem("16px")};
  background: ${theme.colors.white};
  box-shadow: 0px 0px 6px rgb(0 0 0 / 18%);
  transition: all 0.5s ease;
  margin-bottom: ${rem("16px")};
  justify-content: space-between;
  padding: ${rem("32px")} ${rem("24px")};
  height: ${rem("160px")};

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    grid-row-gap: ${rem("14px")};
    margin-bottom: ${rem("16px")};
    padding: ${rem("30px")} ${rem("22px")};
    height: ${rem("140px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    grid-row-gap: ${rem("9px")};
    margin-bottom: ${rem("12px")};
    padding: ${rem("16px")} ${rem("14px")};
    height: ${rem("110px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-row-gap: ${rem("8px")};
    margin-bottom: ${rem("11px")};
    padding: ${rem("15px")} ${rem("14px")};
    height: ${rem("105px")};
  }
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${rem("16px")};
  font-weight: 600;
  font-size: ${rem("18px")};
  align-items: center;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("17px")};
    grid-column-gap: ${rem("14px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("14px")};
    grid-column-gap: ${rem("12px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("13px")};
    grid-column-gap: ${rem("12px")};
  }
`;

const CardFooter = styled.div`
  font-size: ${rem("18px")};
  font-weight: 500;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("17px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("14px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("13px")};
  }
`;

const Img = styled.img`
  width: ${rem("52px")};
  height: ${rem("52px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("48px")};
    height: ${rem("48px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("38px")};
    height: ${rem("38px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: ${rem("40px")};
    height: ${rem("40px")};
  }
`;
