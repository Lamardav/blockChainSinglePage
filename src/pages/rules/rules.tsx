import React from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { BreadCrumb } from "../../components/breadCrumb/breadCrumb";

export const Rules = () => {
    return (
        <>
            <BreadCrumb linkName={ "Exchange conditions" }/>
            <Main>

                <Title>
                    EXCHANGE RULES
                </Title>
                <Content>
                    <P>
                        Before using the services of the Biswap Coins service, the User is obliged to read the Terms and Conditions
                        for the provision of services by the Biswap Coins service in full. The use of services of the Biswap Coins
                        service is possible only if the User accepts all the terms of the agreement.
                    </P>
                    <Paragraph>
                        Terms and conditions for the provision of services by the Biswap Coins service:
                    </Paragraph>
                    <P>
                        1. Terms and definitions
                    </P>
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
  padding: ${rem("24")};
  box-shadow: 0 8px 16px rgb(0 0 0 / 5%);
  background: ${theme.colors.white};

`;

const P = styled.p`
  margin: 0;
  font-size: ${rem("16px")};
  padding-bottom: ${rem("12px")};
  font-weight: 500;
  line-height: ${rem("22px")};
  overflow-wrap: break-word;
`;


const Paragraph = styled.p`
  margin: 0;
  font-size: ${rem("17px")};
  padding-bottom: ${rem("12px")};
  line-height: ${rem("24px")};
  overflow-wrap: break-word;
  font-weight: bold;
`;
