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
  align-items: center;
  width: 100%;

  & > :nth-child(2) {
    width: ${rem("240")};
    height: ${rem("100")};
    margin-bottom: ${rem("10px")};
  }

  & > :nth-child(3) {
    width: ${rem("240")};
    height: ${rem("120")};
    margin-bottom: -${rem("20px")};
  }

  & > :nth-child(4) {
    width: ${rem("210")};
    height: ${rem("90")};
    margin-bottom: ${rem("0px")};
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    & > :nth-child(1) {
      width: ${rem("140")};
      height: ${rem("50")};
      margin-top: ${rem("5px")};
    }

    & > :nth-child(2) {
      width: ${rem("200")};
      height: ${rem("80")};
      margin-bottom: ${rem("10px")};
    }

    & > :nth-child(3) {
      width: ${rem("140")};
      height: ${rem("120")};
      margin-bottom: -${rem("10px")};
    }

    & > :nth-child(4) {
      width: ${rem("170")};
      height: ${rem("80")};
      margin-bottom: ${rem("0px")};
    }
  }

  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    & > :nth-child(1) {
      width: ${rem("100")};
      height: ${rem("30")};
      margin-bottom: ${rem("10px")};
    }

    & > :nth-child(2) {
      width: ${rem("120")};
      height: ${rem("50")};
      margin-bottom: ${rem("10px")};
    }

    & > :nth-child(3) {
      width: ${rem("120")};
      height: ${rem("60")};
      margin-bottom: -${rem("0px")};
    }

    & > :nth-child(4) {
      width: ${rem("122")};
      height: ${rem("50")};
      margin-bottom: ${rem("3px")};
    }
  }


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
    // @media screen and (max-width: ${theme.rubberSize.desktop}) {
    //   width: ${rem("140")};
    //   height: ${rem("55")};
  // }
    // @media screen and (max-width: ${theme.rubberSize.laptop}) {
    //   width: ${rem("110")};
    //   height: ${rem("49")};
  // }
    // @media screen and (max-width: ${theme.rubberSize.tablet}) {
    //   width: ${rem("100")};
    //   height: ${rem("45")};
  // }
`;
