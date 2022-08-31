import React from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { BreadCrumb } from "../../components/breadCrumb/breadCrumb";
import { Questions } from "../../components/questions/questions";

export const Faq = () => {
    return (
        <>
            <BreadCrumb linkName={ "For users" }/>
            <Main>

                <Title>
                    FOR USERS
                </Title>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
                <Questions question={ "How to register?" }
                    answer={ "The registration process in our service is under maintenance" }/>
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
  background-color: #f08585;
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
    background: #720004;
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
