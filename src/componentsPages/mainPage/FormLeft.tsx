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
`;

const Description = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: ${rem("16px")};
  margin-bottom: ${rem("24px")};
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: ${rem("6px")};
  background: ${theme.colors.white};
  box-shadow: 0px 0px 6px rgb(0 0 0 / 18%);
  transition: all 0.5s ease;
  margin-bottom: ${rem("16px")};
  justify-content: space-between;
  padding: ${rem("24px")} ${rem("24px")};
  height: ${rem("130px")};
  &:nth-last-child(1){
    margin-bottom: 0;
  }
`;

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${rem("12px")};
  font-weight: 600;
  font-size: ${rem("18px")};
`;

const CardFooter = styled.div`
  font-size: ${rem("18px")};
  font-weight: 500;
`;

const Img = styled.img`
  width: ${rem("24px")};
  height: ${rem("24px")};
`;
