import * as React from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { Form } from "../../componentsPages/mainPage/Form";
import { HowToStart } from "../../componentsPages/mainPage/howToStart";
import { Partners } from "../../componentsPages/mainPage/partners";


export const MainPage = () => {
    return (
        <Content>
            <Form/>
            <HowToStart/>
            <Partners/>
        </Content>
    );
};

const Content = styled.div`
  display: grid;
  grid-column: span 6;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${rem("32px")};
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    grid-template-columns: 1fr
  }
`;


