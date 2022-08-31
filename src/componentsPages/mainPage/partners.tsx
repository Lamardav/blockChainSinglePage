import React from "react";
import styled from "styled-components";
import parner1 from "../../assets/images/mainPage/partners/partner1.png";
import parner2 from "../../assets/images/mainPage/partners/partner2.png";
import parner3 from "../../assets/images/mainPage/partners/partner3.png";
import parner4 from "../../assets/images/mainPage/partners/partner4.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";


export const Partners = () => {
    return (
        <Container>
            <Title>Our partners</Title>
            <PartnersContainer>
                <Img src={ parner1 } alt={ "parner1" }/>
                <Img src={ parner2 } alt={ "parner2" }/>
                <Img src={ parner3 } alt={ "parner3" }/>
                <Img src={ parner4 } alt={ "parner4" }/>
            </PartnersContainer>
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
  margin-bottom: ${rem("40")};

  
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-top: ${rem("32px")};
    grid-row-gap: ${rem("24")};
    margin-bottom: ${rem("30")};

  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-column: span 3;
    margin-bottom: ${rem("20")};
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

const PartnersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  width: 100%;
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: ${rem("24px")};
      grid-column-gap: ${rem("16")};
      }
`;

const Img = styled.img`
  width: ${rem("160")};
  height: ${rem("70")};
  margin: 0 auto;
    @media screen and (max-width: ${theme.rubberSize.desktop}) {
      width: ${rem("140")};
      height: ${rem("55")};   
      }
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      width: ${rem("110")};
      height: ${rem("49")};
    }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      width: ${rem("100")};
      height: ${rem("45")}; 
      }
`;
