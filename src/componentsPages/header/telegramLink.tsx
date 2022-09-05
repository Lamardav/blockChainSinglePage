import React from "react";
import styled from "styled-components";
import tfCircle from "../../assets/images/common/tgCircle.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

export const TelegramLink = () => {
    return (
        <Container>
            <Img src={ tfCircle } alt={ "telegram" }/>
            <P>Telegram</P>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${rem("6px")};
  margin-left: ${rem("56px")};
  cursor: pointer;
  
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("13px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("13px")};
    grid-column-gap: ${rem("4px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: ${rem("11px")};
    margin-right: ${rem("16px")};
  }
`;

const P = styled.p`
  margin: 0;
  width: fit-content;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    display: none;
  }
`;

const Img = styled.img`
  width: ${rem("22px")};
  height: ${rem("22px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("20px")};
    height: ${rem("20px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("18px")};
    height: ${rem("18px")};
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: ${rem("15px")};
    height: ${rem("15px")};
  }
`;
